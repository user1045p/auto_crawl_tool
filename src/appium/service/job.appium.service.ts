// import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import * as wd from 'wd';
// import { AppiumConfig } from '../interfaces/appium-config.interface';

// @Injectable()
// export class JobAppiumService implements OnModuleInit, OnModuleDestroy {
//     private driver: wd.PromiseChainWebdriver;
//     private config: AppiumConfig;

//     constructor(private configService: ConfigService) {
//         this.config = {
//             platformName: 'Android',
//             deviceName: this.configService.get<string>('APPMIUM_DEVICE_NAME'),
//             platformVersion: this.configService.get<string>('APPMIUM_PLATFORM_VERSION'),
//             appPackage: this.configService.get<string>('APPMIUM_APP_PACKAGE'),
//             appActivity: this.configService.get<string>('APPMIUM_APP_ACTIVITY'),
//             automationName: 'UiAutomator2',
//             mumuAdbPort: this.configService.get<number>('APPMIUM_MUMU_ADB_PORT'),
//             noReset: true,
//         };
//     }

//     async onModuleInit() {
//         await this.stopConflictingServices(); // Stop conflicting services
//         await this.cleanUpADBConnections();  // Clean up ADB connections
//         //检查模拟器是否启动
//         await this.checkConnect();
//         // 连接 MuMu 模拟器
//         await this.connectMuMu();
//         // 初始化 Appium 驱动
//         // this.driver = wd.promiseChainRemote('http://localhost:4723/wd/hub');
//         // 修改后（强制 IPv4）
//         this.driver = wd.promiseChainRemote('http://127.0.0.1:4723/wd/hub');
//         await this.driver.init(this.config);
//         await this.clickLoginButton();
//     }

//     private async stopConflictingServices(): Promise<void> {
//         const { exec } = require('child_process');

//         // Kill any existing Appium servers
//         // await new Promise((resolve, reject) => {
//         //     exec('taskkill /F /IM node.exe', (error: Error, stdout: string, stderr: string) => {
//         //         if (error) {
//         //             console.error(`Failed to kill Node.js processes: ${error.message}`);
//         //         } else {
//         //             console.log('Stopped any running Node.js processes.');
//         //         }
//         //         resolve(stdout);
//         //     });
//         // });

//         // Kill any existing ADB processes
//         await new Promise((resolve, reject) => {
//             exec('taskkill /F /IM adb.exe', (error: Error, stdout: string, stderr: string) => {
//                 if (error) {
//                     console.error(`Failed to kill ADB processes: ${error.message}`);
//                 } else {
//                     console.log('Stopped any running ADB processes.');
//                 }
//                 resolve(stdout);
//             });
//         });
//     }

//     private async cleanUpADBConnections(): Promise<void> {
//         const { exec } = require('child_process');
//         const adbPath = 'D:\\software-home\\androidsdk\\platform-tools\\adb.exe';

//         // Disconnect all devices
//         await new Promise((resolve, reject) => {
//             exec(`"${adbPath}" disconnect`, (error: Error, stdout: string, stderr: string) => {
//                 if (error) {
//                     console.error(`Failed to disconnect ADB devices: ${error.message}`);
//                 } else {
//                     console.log('Disconnected all ADB devices.');
//                 }
//                 resolve(stdout);
//             });
//         });

//         // Kill and restart ADB server
//         // adb kill-server && adb start-server
//         await new Promise((resolve, reject) => {
//             exec(`"${adbPath}" kill-server && "${adbPath}" start-server`, (error: Error, stdout: string, stderr: string) => {
//                 if (error) {
//                     console.error(`Failed to restart ADB server: ${error.message}`);
//                 } else {
//                     console.log('Restarted ADB server.');
//                 }
//                 resolve(stdout);
//             });
//         });
//     }

//     async onModuleDestroy() {
//         await this.driver.quit(); // 关闭会话
//     }

//     async checkConnect(): Promise<void> {
//         const net = require('net');
//         const port = 7555;

//         const client = new net.Socket();
//         client.connect(port, '127.0.0.1', () => {
//             console.log(`端口 ${port} 已开放`);
//             client.destroy();
//         });

//         client.on('error', (err) => {
//             console.log(`端口 ${port} 未开放: ${err.message}`);
//         });
//     }

//     private async connectMuMu(): Promise<void> {
//         const { exec } = require('child_process');
//         const adbPath = 'D:\\software-home\\androidsdk\\platform-tools\\adb.exe'; // 使用绝对路径

//         await new Promise((resolve, reject) => {
//             exec(
//                 `"${adbPath}" connect 127.0.0.1:${this.config.mumuAdbPort}`,
//                 (error: Error, stdout: string, stderr: string) => {
//                     // 打印完整日志
//                     console.log('[ADB stdout]', stdout);
//                     console.error('[ADB stderr]', stderr);
//                     // 关键判断逻辑：仅当 error 存在或 stderr 包含错误关键词时拒绝
//                     if (error) {
//                         reject(new Error(`ADB 执行错误: ${error.message}`));
//                     } else if (stderr.includes('failed') || stderr.includes('error')) {
//                         reject(new Error(`ADB 连接失败: ${stderr}`));
//                     } else {
//                         // 即使 stderr 有内容（如 daemon 启动日志），只要无错误关键词则视为成功
//                         resolve(stdout);
//                     }
//                 }
//             );
//         });
//     }

//     // 示例：点击登录按钮
//     async clickLoginButton(): Promise<void> {
//         try {

//             // Wait for the first TextView element to be present and visible
//             await this.driver.waitForElementById('com.job.android:id/textSwitcher', 10000, 2000);
//             const element = await this.driver.elementById('com.job.android:id/textSwitcher');
//             await element.click();


//             // Wait for the inputText element to be present and visible
//             await this.driver.waitForElementById('com.job.android:id/inputText', 10000, 2000);
//             const inputBox = await this.driver.elementById('com.job.android:id/inputText');
//             await inputBox.sendKeys('销售'); // Corrected method name to sendKeys

//             // Wait for the tv_search button to be present and visible
//             await this.driver.waitForElementById('com.job.android:id/tv_search', 10000, 2000);
//             const button = await this.driver.elementById('com.job.android:id/tv_search');
//             await button.click();

//             await this.driver.sleep(5000);
//             // 判断这个元素是否存在，如果存在就点击 com.job.android:id/ivBack
//             try {
//                 // Wait for the element to be present and visible
//                 await this.driver.waitForElementById('com.job.android:id/ivBack', 10000, 2000);
//                 const backButton = await this.driver.elementById('com.job.android:id/ivBack');
//                 await backButton.click();
//             } catch (error) {
//                 console.log('Element com.job.android:id/ivBack not found:', error.message);
//             }
            

//             // Simulate a swipe-up gesture
//             await this.swipeAndAction();

//             console.log("点击结束！");
//         } catch (error) {
//             throw new Error(`点击登录按钮失败: ${error.message}`);
//         }
//     }

//     private async swipeAndAction(): Promise<void> {
//         let count = 0;
//         while (true) {
//             try {
//                 const windowSize = await this.driver.getWindowSize();
//                 const startX = windowSize.width / 2;
//                 const endX = windowSize.width / 2;
//                 const startY = windowSize.height * 0.8; // Start from 80% of the screen height
//                 const endY = windowSize.height * 0.2;   // End at 20% of the screen height
//                 console.log("startX:" + startX, "startY:" + startY, "endY:" + endY);

//                 await new wd.TouchAction(this.driver)
//                     .press({ x: startX, y: startY })
//                     .wait(0)  // 更流畅的滑动时间
//                     .moveTo({ x: startX, y: startY - 228 })
//                     .release()
//                     .perform();
//             } catch (error) {
//                 console.log(`滑动失败: ${error.message}`);
//             }

//             // Wait for elements with a fallback mechanism
//             let elements: wd.PromiseWebdriverElement[] = [];
//             try {
//                 await this.driver.waitForElementById('com.job.android:id/compose', 10000, 2000);
//                 elements = await this.driver.elementById('com.job.android:id/compose');
//             } catch (error) {
//                 console.log("元素不存在，继续滑动");
//                 continue;

//             }

//             // Ensure elements is always an array
//             if (!Array.isArray(elements)) {
//                 elements = [elements]; // Wrap single element in an array
//             }

//             console.log("elements.length:" + elements.length);

//             if (elements.length > 0) {
//                 //点击进去详情
//                 const firstElement = elements[0];
//                 await firstElement.click();
//                 //退出列表返回键
//                 //com.job.android:id/iv_back

//                 //申请按钮
//                 //com.job.android:id/applyButton

//                 //去聊聊按钮
//                 //com.job.android:id/chatButtonBg或者com.job.android:id/chatButtonText

//                 //发送简历按钮
//                 //android.widget.TextView需要匹配里面的内容找到按钮

//                 //交换微信按钮
//                 //com.job.android:id/tv_send_wechat_request

//                 //聊天框
//                 //com.job.android:id/etContent@text("请输入消息")

//                 //发送按钮
//                 //android.widget.TextView@text("发送")

//                 //HR方发送的信息
//                 //com.job.android:id/tv_message

//                 //己方发送的信息
//                 //com.job.android:id/message_item_content


//                 // Wait for the list page to reload
//                 // await this.driver.sleep(2000); // Adjust the sleep time as necessary

//                 // try {
//                 //     // Click the "申请按钮"
//                 //     await this.driver.waitForElementById('com.job.android:id/applyButton', 10000, 2000);
//                 //     const applyButton = await this.driver.elementById('com.job.android:id/applyButton');
//                 //     await applyButton.click();
//                 // } catch (error) {
//                 //     console.error(`Failed to click the apply button: ${error.message}`);
//                 // }

//                 // Wait for the apply page to load
//                 await this.driver.sleep(2000); // Adjust the sleep time as necessary

//                 try {
//                     // Click the "去聊聊按钮"
//                     await this.driver.waitForElementById('com.job.android:id/chatButtonBg', 10000, 2000);
//                     const chatButton = await this.driver.elementById('com.job.android:id/chatButtonBg');
//                     await chatButton.click();
//                 } catch (error) {
//                     console.error(`Failed to click the chat button: ${error.message}`);
//                 }

//                 // Wait for the chat page to load
//                 // await this.driver.sleep(2000); // Adjust the sleep time as necessary

//                 // try {
//                 //     // Click the "发送简历按钮"
//                 //     await this.driver.waitForElementByXPath('//android.widget.TextView[@text="发送简历"]', 10000, 2000);
//                 //     const sendResumeButton = await this.driver.elementByXPath('//android.widget.TextView[@text="发送简历"]');
//                 //     await sendResumeButton.click();
//                 // } catch (error) {
//                 //     console.error(`Failed to click the send resume button: ${error.message}`);
//                 // }

//                 // Wait for the send resume page to load
//                 // await this.driver.sleep(2000); // Adjust the sleep time as necessary

//                 // try {
//                 //     // Click the "交换微信按钮"
//                 //     await this.driver.waitForElementById('com.job.android:id/tv_send_wechat_request', 10000, 2000);
//                 //     const exchangeWeChatButton = await this.driver.elementById('com.job.android:id/tv_send_wechat_request');
//                 //     await exchangeWeChatButton.click();
//                 // } catch (error) {
//                 //     console.error(`Failed to click the exchange WeChat button: ${error.message}`);
//                 // }

//                 // Wait for the exchange WeChat page to load
//                 await this.driver.sleep(2000); // Adjust the sleep time as necessary

//                 try {
//                     // Enter text into the chat box
//                     await this.driver.waitForElementById('com.job.android:id/etContent', 10000, 2000);
//                     const chatBox = await this.driver.elementById('com.job.android:id/etContent');
//                     await chatBox.sendKeys('Hello, let’s connect!');
//                 } catch (error) {
//                     console.error(`Failed to enter text into the chat box: ${error.message}`);
//                 }

//                 // Wait for the text to be entered
//                 await this.driver.sleep(2000); // Adjust the sleep time as necessary

//                 try {
//                     // Click the "发送" button
//                     await this.driver.waitForElementByXPath('//android.widget.TextView[@text="发送"]', 10000, 2000);
//                     const sendButton = await this.driver.elementByXPath('//android.widget.TextView[@text="发送"]');
//                     await sendButton.click();
//                 } catch (error) {
//                     console.error(`Failed to click the send button: ${error.message}`);
//                 }

//                 for (let i = 0; i < 2; i++) {
//                     // Wait for the detail page to load
//                     await this.driver.sleep(2000); // Adjust the sleep time as necessary
//                     // Click the "退出列表返回键"
//                     try {
//                         if (i == 0) {
//                             await this.driver.waitForElementById('com.job.android:id/iv_title_back', 10000, 2000);
//                             const backButton = await this.driver.elementById('com.job.android:id/iv_title_back');
//                             await backButton.click();
//                         } else {
//                             await this.driver.waitForElementById('com.job.android:id/iv_back', 10000, 2000);
//                             const backButton = await this.driver.elementById('com.job.android:id/iv_back');
//                             await backButton.click();
//                         }
//                     } catch (error) {
//                         console.error(`Failed to click the back button: ${error.message}`);
//                     }
//                 }

//                 // Optionally, you can add more actions here

//                 // Continue to the next iteration

//                 continue;
//             } else {
//                 console.log("No elements found with the specified ID.");
//             }

//             console.log("Detailed information for each element:");
//             const uniqueElements = new Set<string>(); // To store composite keys
//             console.log("count:" + count++);

//             for (let [index, ele] of elements.entries()) {
//                 try {
//                     // Retrieve child elements of the current parent element
//                     const childElements = await ele.elements('class name', 'android.widget.TextView'); // Example: Find TextView children

//                     console.log(`Parent Element Index: ${index}`);
//                     console.log(`Number of Child Elements: ${childElements.length}`);

//                     for (let [childIndex, childEle] of childElements.entries()) {
//                         try {
//                             const resourceId = await childEle.getAttribute('resourceId'); // Get the resource ID
//                             const text = await childEle.text(); // Get the text content
//                             const location = await childEle.getLocation(); // Get the location (x, y)
//                             const size = await childEle.getSize(); // Get the size (width, height)

//                             // Create a composite key using resourceId, text, and location
//                             const compositeKey = `${resourceId}-${text}-${location.x}-${location.y}`;

//                             // Add the composite key to the Set to ensure uniqueness
//                             if (!uniqueElements.has(compositeKey)) {
//                                 uniqueElements.add(compositeKey);

//                                 // Log detailed information
//                                 // console.log(`Child Element Index : ${childIndex}`);
//                                 // console.log(`Composite Key: ${compositeKey}`);
//                                 // console.log(`Resource ID: ${resourceId}`);
//                                 // console.log(`Text Content: ${text}`);
//                                 // console.log(`Location: x=${location.x}, y=${location.y}`);
//                                 // console.log(`Size: width=${size.width}, height=${size.height}`);
//                                 // console.log('---'); // Separator for readability
//                             }
//                         } catch (error) {
//                             console.error(`Error retrieving details for child element at index ${childIndex}: ${error.message}`);
//                         }
//                     }
//                 } catch (error) {
//                     console.error(`Error retrieving child elements for parent element at index ${index}: ${error.message}`);
//                 }
//             }

//             // Log unique elements
//             console.log("Unique TextView elements:");
//             for (let key of uniqueElements) {
//                 console.log(`Unique Element Key: ${key}`);
//             }
//             //// 构造 W3C 规范的动作序列
//             // await this.driver.actions()
//             // .move({ x: startX, y: startY })
//             // .down()
//             // .pause(500)
//             // .move({ x: startX, y: endY })
//             // .up()
//             // .perform();
//         }
//     }

//     // 其他自定义操作方法...
// }