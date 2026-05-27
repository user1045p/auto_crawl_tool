import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { remote } from 'webdriverio';
import { AppiumConfig } from '../interfaces/appium-config.interface';
import { ChildProcess, exec, execSync, spawn } from 'child_process';
import { EventEmitter } from 'events';
import { clearInterval, setInterval } from 'timers';
import { join } from 'path';

@Injectable()
export class CommonAppiumService implements OnModuleInit, OnModuleDestroy {

    // private driver: wd.PromiseChainWebdriver;
    private driver: WebdriverIO.Browser;
    private config: any;
    private adbPath = 'D:\\software-home\\androidsdk\\platform-tools\\adb.exe';
    private logger = new Logger(CommonAppiumService.name);
    private isRestoring = false; // 重启锁
    private healthCheckInterval: NodeJS.Timeout;
    private logMonitorProcess: ChildProcess;
    private eventEmitter = new EventEmitter();

    // Default configuration with W3C capabilities merged
    private defaultConfig: AppiumConfig = {
        capabilities: {
            platformName: 'Android',
            'appium:deviceName': '127.0.0.1:7555', // 默认值,
            'appium:platformVersion': '12',
            'appium:appPackage': 'com.zhaopin.social',
            'appium:appActivity': 'com.zhaopin.social.SplashActivity',
            'appium:automationName': 'UiAutomator2',
            'appium:noReset': true,
            'appium:skipServerInstallation': false
        },
        services: ['appium'],
        logLevel: 'error',
        port: 4723, // Appium默认端口
        path: '/wd/hub',
        connectionRetryCount: 3
    };

    constructor() {
        // Initialize with default configuration
        this.config = { ...this.defaultConfig };
    }

    // Method to override the default configuration
    public setConfig(config: Partial<AppiumConfig>): void {
        this.config = { ...this.defaultConfig, ...config };
    }

    public getDriver(): WebdriverIO.Browser {
        return this.driver;
    }

    async onModuleInit() {
        await this.initAppium();
        this.startHealthCheck();
        this.startLogMonitoring();
    }

    public async initAppium(): Promise<void> {

        await this.stopConflictingServices(); // Stop conflicting services
        await this.cleanUpADBConnections();  // Clean up ADB connections
        //检查模拟器是否启动
        await this.checkConnect();
        // 连接 MuMu 模拟器
        await this.connectMuMu();
        // 检查并启动应用
        await this.ensureAppLaunched();
        // 初始化WebdriverIO
        this.driver = await remote(this.config);

        await this.driver.startActivity('com.zhaopin.social', 'com.zhaopin.social.SplashActivity');
    }

    private async stopConflictingServices(): Promise<void> {
        const { exec } = require('child_process');

        // Kill any existing Appium servers
        // await new Promise((resolve, reject) => {
        //     exec('taskkill /F /IM node.exe', (error: Error, stdout: string, stderr: string) => {
        //         if (error) {
        //             console.error(`Failed to kill Node.js processes: ${error.message}`);
        //         } else {
        //             console.log('Stopped any running Node.js processes.');
        //         }
        //         resolve(stdout);
        //     });
        // });

        // Kill any existing ADB processes
        await new Promise((resolve, reject) => {
            exec('taskkill /F /IM adb.exe', (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    console.error(`Failed to kill ADB processes: ${error.message}`);
                } else {
                    console.log('Stopped any running ADB processes.');
                }
                resolve(stdout);
            });
        });
    }

    private async cleanUpADBConnections(): Promise<void> {
        const { exec } = require('child_process');

        // Disconnect all devices
        await new Promise((resolve, reject) => {
            exec(`"${this.adbPath}" disconnect`, (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    console.error(`Failed to disconnect ADB devices: ${error.message}`);
                } else {
                    console.log('Disconnected all ADB devices.');
                }
                resolve(stdout);
            });
        });

        // Kill and restart ADB server(手动执行命令：adb kill-server && adb start-server)
        await new Promise((resolve, reject) => {
            exec(`"${this.adbPath}" kill-server && "${this.adbPath}" start-server`, (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    console.error(`Failed to restart ADB server: ${error.message}`);
                } else {
                    console.log('Restarted ADB server.');
                }
                resolve(stdout);
            });
        });
    }

    /**************** 核心增强功能 ****************/

    /**
     * 主动心跳检测（每30秒执行一次）
     */
    private startHealthCheck(): void {
        this.healthCheckInterval = setInterval(async () => {
            try {
                // 无害操作检测服务健康状态
                const currentPackage = await this.driver.getCurrentPackage();
                this.logger.debug(`[Heartbeat] Service healthy, current package: ${currentPackage}`);
                this.eventEmitter.emit('health_check_success');
            } catch (error) {
                this.logger.error('[Heartbeat] Service unhealthy', error.stack);
                this.eventEmitter.emit('service_crash', error);
            }
        }, 30_000); // 30秒间隔
    }

    /**
     * 被动日志监控（实时分析Appium日志）
     */
    private startLogMonitoring(): void {
        // 启动日志监控子进程
        // 在启动代码中
        const appiumPath = this.getAppiumPath();
        const isWindows = process.platform === 'win32';

        this.logMonitorProcess = spawn(
            isWindows ? 'node' : appiumPath,
            isWindows ? [appiumPath, '--log', 'log/appium.log'] : ['--log', 'log/appium.log'],
            {
                stdio: ['ignore', 'pipe', 'pipe'],
                shell: isWindows,
                windowsVerbatimArguments: isWindows
            }
        );
        // 实时分析标准输出
        this.logMonitorProcess.stdout?.on('data', (data) => {
            const log = data.toString();
            if (this.isCrashLog(log)) {
                this.logger.error('[LogMonitor] Detected crash signature');
                this.eventEmitter.emit('service_crash', new Error(log));
            }
        });
        // 错误处理
        this.logMonitorProcess.stderr?.on('data', (data) => {
            this.logger.error(`[LogMonitor] ${data.toString()}`);
        });

        // 事件监听
        this.eventEmitter.on('service_crash', async (error) => {
            if (!this.isRestoring) {
                await this.handleServiceCrash(error);
            }
        });
    }

    // 获取Appium可执行文件路径
    private getAppiumPath(): string {
        try {
            // 尝试获取全局安装路径
            const globalPath = require.resolve('appium/bin/appium.js', { paths: require.main.paths });
            return globalPath;
        } catch (e) {
            // 使用本地安装路径
            return join(process.cwd(), 'node_modules', '.bin', 'appium' + (process.platform === 'win32' ? '.cmd' : ''));
        }
    }

    /**
     * 服务崩溃处理（带指数退避重试）
     */
    private async handleServiceCrash(error: Error): Promise<void> {
        this.isRestoring = true;
        let attempts = 0;
        const maxAttempts = 3;

        while (attempts < maxAttempts) {
            try {
                this.logger.warn(`Attempting recovery (${attempts + 1}/${maxAttempts})`);

                // 清理旧会话
                if (this.driver) {
                    await this.driver.deleteSession().catch(() => { });
                }

                // 重启服务
                await this.restartAppiumServer();
                await this.initAppium();

                this.logger.log('Service recovery successful');
                this.isRestoring = false;
                return;
            } catch (retryError) {
                attempts++;
                const delay = Math.pow(2, attempts) * 1000; // 指数退避
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        this.logger.error(`Service recovery failed after ${maxAttempts} attempts`);
        this.isRestoring = false;
        throw new Error('Service recovery failed');
    }

    /**************** 工具方法 ****************/

    /**
     * 重启Appium服务（带端口检查）
     */
    private async restartAppiumServer(): Promise<void> {
        this.logger.log('Restarting Appium server...');

        // 强制终止现有进程
        execSync(`taskkill /F /IM node.exe /FI "WINDOWTITLE eq Appium"`);

        // 检查端口释放
        await this.waitForPortFree(4723, 5000);

        // 启动新服务
        spawn('appium', ['--port', '4723', '--log', 'log/appium.log'], {
            detached: true,
            stdio: 'ignore'
        }).unref();
    }

    /**
     * 端口状态检查
     */
    private async waitForPortFree(port: number, timeout: number): Promise<void> {
        const start = Date.now();
        return new Promise((resolve, reject) => {
            const check = () => {
                try {
                    execSync(`netstat -ano | findstr :${port}`);
                    if (Date.now() - start > timeout) {
                        reject(new Error(`Port ${port} still in use after ${timeout}ms`));
                    } else {
                        setTimeout(check, 500);
                    }
                } catch {
                    resolve();
                }
            };
            check();
        });
    }

    /**
     * 崩溃日志识别
     */
    private isCrashLog(log: string): boolean {
        const crashSignatures = [
            'instrumentation process is not running',
            'UiAutomator2Server crashed',
            'ECONNREFUSED'
        ];
        return crashSignatures.some(sig => log.includes(sig));
    }

    async onModuleDestroy() {
        this.logger.log('Cleaning up resources...');
        clearInterval(this.healthCheckInterval);

        if (this.logMonitorProcess) {
            this.logMonitorProcess.kill('SIGTERM');
        }
        console.log("调用了onModuleDestroy");
        if (this.driver) {
            await this.driver.deleteSession(); // Use deleteSession instead of quit
        }
    }

    async checkConnect(): Promise<void> {
        const net = require('net');
        const port = 7555;

        const client = new net.Socket();
        client.connect(port, '127.0.0.1', () => {
            console.log(`端口 ${port} 已开放`);
            client.destroy();
        });

        client.on('error', (err) => {
            console.log(`端口 ${port} 未开放: ${err.message}`);
            //如果没有开放，则使用启动命令去启动mumu模拟器
        });
    }

    private async ensureAppLaunched(): Promise<void> {
        const { exec } = require('child_process');
        const appPackage = 'com.zhaopin.social';
        const appActivity = 'com.zhaopin.social.SplashActivity';
        try {
            // 检查应用是否正在运行
            const isRunning = await new Promise<boolean>((resolve) => {
                exec(
                    `"${this.adbPath}" shell pidof ${appPackage}`,
                    (error: Error, stdout: string) => {
                        resolve(!!stdout.trim());
                    }
                );
            });
            console.log('应用是否正在运行：', isRunning);
            if (!isRunning) {
                console.log('应用未运行，正在启动...');
                // 启动应用
                await new Promise<void>((resolve, reject) => {
                    exec(
                        `"${this.adbPath}" shell am start -n ${appPackage}/${appActivity}`,
                        (error: Error, stdout: string, stderr: string) => {
                            if (error || stderr.includes('Error')) {
                                reject(new Error(`启动应用失败: ${stderr || error.message}`));
                            } else {
                                console.log('应用启动成功');
                                resolve();
                            }
                        }
                    );
                });

                // 等待应用完全启动
                await new Promise(resolve => setTimeout(resolve, 5000));
            } else {
                console.log('应用已在运行');
            }
        } catch (error) {
            console.error(`应用状态检查失败: ${error.message}`);
            throw error;
        }
    }

    private async connectMuMu(): Promise<void> {
        const { exec } = require('child_process');
        await new Promise((resolve, reject) => {
            exec(
                `"${this.adbPath}" connect 127.0.0.1:7555`,
                (error: Error, stdout: string, stderr: string) => {
                    // 打印完整日志
                    console.log('[ADB stdout]', stdout);
                    console.error('[ADB stderr]', stderr);
                    // 关键判断逻辑：仅当 error 存在或 stderr 包含错误关键词时拒绝
                    if (error) {
                        reject(new Error(`ADB 执行错误: ${error.message}`));
                    } else if (stderr.includes('failed') || stderr.includes('error')) {
                        reject(new Error(`ADB 连接失败: ${stderr}`));
                    } else {
                        // 即使 stderr 有内容（如 daemon 启动日志），只要无错误关键词则视为成功
                        resolve(stdout);
                    }
                }
            );
        });
    }
}