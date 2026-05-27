import puppeteer from 'puppeteer';
// const puppeteer = require('puppeteer-extra');
import { join } from 'path';
import { exec } from 'child_process';
const fs = require('fs');
import { BloomFilter } from 'bloom-filters';
import { createHash } from 'crypto'; // 导入crypto模块

const path = require('path');
const os = require('os');

// 判断是否为打包后的EXE环境
const isPackaged = __dirname.includes('\\snapshot\\');

//这个废弃不用，使用本机安装的chrome浏览器已经可以实现功能了
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
//bossCookie
let bossCookieStr = '';

//zhaopinCookie
let zhaopinCookieStr = '';

//liepinCookie
let liepinCookieStr = '';

let jobCookieStr = '';

//存boss网站Cookie的域名（注意不是www.zhipin.com）
let bossDomain = '.zhipin.com'

// 存放智联招聘的Cookie的域名（注意不是www.zhaopin.com）
let zhaoPinDomain = '.zhaopin.com'

//存猎聘网站Cookie的域名（注意不是www.liepin.com）
let liepinDomain = '.liepin.com'

// 存放前程无忧的Cookie的域名（注意不是www.zhaopin.com）
let jobDomain = '.51job.com'

// 使用 stealth 插件
// puppeteer.use(StealthPlugin());

// 布隆过滤器实例
let bloomFilter: BloomFilter;

// 布隆过滤器文件路径
const bloomFilterFilePath = join(process.cwd(), 'public/resources/bloomFilter.json');

/**
 * 初始化布隆过滤器
 */
async function initializeBloomFilter() {
    if (fs.existsSync(bloomFilterFilePath)) {
        try {
            const data = fs.readFileSync(bloomFilterFilePath, 'utf8');
            const jsonData = JSON.parse(data);
            // 尝试加载布隆过滤器
            bloomFilter = BloomFilter.fromJSON(jsonData);
            console.log('Bloom filter loaded from file.');
        } catch (error) {
            console.error('Failed to load bloom filter:', error);
        }
    } else {
        // 初始化一个新的布隆过滤器，设置大小和哈希函数的数量
        bloomFilter = new BloomFilter(200000, 10);
        console.log('New bloom filter created.');
    }
}

/**
 * 保存布隆过滤器到文件
 */
async function saveBloomFilter() {
    // 将布隆过滤器序列化为 JSON(这里有坑，原本的很多提示都是使用toJSON方法，但是那个方法已经被废弃了，转成使用saveAsJSON方法)
    const data = bloomFilter.saveAsJSON();
    // 保存为 JSON 文件
    fs.writeFileSync(bloomFilterFilePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Bloom filter saved to file.');
}

/**
 * 检查岗位是否重复
 * @param jobKey 唯一标识岗位的键
 * @returns 如果岗位重复返回 true，否则返回 false
 */
async function isDuplicateJob(jobKey: string): Promise<boolean> {
    if (!bloomFilter) {
        await initializeBloomFilter();
    }
    const isDuplicate = bloomFilter.has(jobKey);
    if (!isDuplicate) {
        bloomFilter.add(jobKey);
        await saveBloomFilter();
    }
    return isDuplicate;
}

function waitForPromise(promise: any, timeout: number) {
    // 创建一个在指定时间后 reject 的 Promise
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Timeout')), timeout);
    });

    // 使用 Promise.race 来确定哪个 Promise 先完成
    return Promise.race([promise, timeoutPromise]);
}


// 检查元素是否存在，并执行$eval(确保有内容才返回，延时比较高，推荐使用)
async function checkElementExit(element: string, page: any): Promise<boolean> {
    let Flag = false;
    let elementExists = false;
    for (let i = 0; i < 5; i++) { // 尝试5次
        try {
            const promise = await page.waitForSelector(element);
            await waitForPromise(promise, 200).then(data => {
                Flag = true;
            }).catch(error => {
                Flag = false;
            }).finally(
                () => {
                    // console.log('check successful!!');
                }
            );
            elementExists = await page.evaluate((selector: any) => {
                return document.querySelector(selector) !== null;
            }, element);
            if (Flag && elementExists) {
                break;
            } else {
                await new Promise((resolve) => setTimeout(resolve, 200)); // 等待 3 秒
                console.log('The ' + i + ' attempt to obtain content.And the element is ' + element);
                continue;
            } // 如果获取到内容，跳出循环
        } catch (error) {
            console.error(`The` + element + ` content Attempt obtain failed:`, error);
            await new Promise((resolve) => setTimeout(resolve, 200)); // 等待 3 秒// 等待1秒后重试
        }
    }
    if (!(elementExists && Flag)) {
        console.log('Failed to check the content exit or not.')
    }
    await delay(200); // 等待0.2秒钟
    return elementExists && Flag;
}


// 检查元素是否存在，并执行$eval(旧方法)
async function checkElementExitNoDelay(element: string, page: any) {
    let Flag = false;
    const promise = page.waitForSelector(element);
    await waitForPromise(promise, 1000).then(data => {
        Flag = true;
    }).catch(error => {
        Flag = false;
    }).finally(
        () => {
            // console.log('check successful!!');
        }
    );
    const elementExists = await page.evaluate((selector: any) => {
        return document.querySelector(selector) !== null;
    }, element);
    return elementExists && Flag;
}


/**
 * 项目启动，读取cookie文件
 * 2024/09/10:update，改为上传cookie或读取文件
 */
async function readCookie(content: string, platform: string) {
    if (content != '') {
        if (platform == 'boss') {
            bossCookieStr = content;
        } else if (platform == 'zhaopin') {
            zhaopinCookieStr = content;
        } else if (platform == 'liepin') {
            liepinCookieStr = content;
        } else if (platform == 'job') {
            jobCookieStr = content;
        }
    } else {
        let originUrl = join(process.cwd(), 'public/resources');
        fs.readFile(originUrl + '//bossCookie.txt', 'utf8', (err: any, content: string) => {
            if (err) throw err;
            bossCookieStr = content;
        });
        fs.readFile(originUrl + '//zhaoPinCookie.txt', 'utf8', (err: any, content: string) => {
            if (err) throw err;
            zhaopinCookieStr = content;
        });
    }
}

async function obtainContentByFile() {
    let originUrl = join(process.cwd(), 'public/resources');
    const data = await fs.readFileSync(originUrl + '//bossCookie.txt', 'utf8', (err: any, content: string) => {
        if (err) throw err;
    });
    return data;
}


/**
 * 暂停方法
 * @param time 单位毫秒
 * @returns 
 */
async function delay(time: any) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}


/**
 * JS获取cookie
 * @param name 
 * @returns 
 */
function getCookie(name: string) {
    // 将document.cookie字符串按照; 分割成数组
    var cookies = document.cookie.split(';');
    // 修改函数以返回name的值
    var value = '';
    // 遍历cookie数组
    for (var i = 0; i < cookies.length; i++) {
        // 获取cookie的名字和值
        var parts = cookies[i].split('=');
        // 移除字符串前后的空格
        var cookieName = parts[0].trim();
        // 如果当前cookie是我们要找的name，则返回它的值
        if (cookieName === name) {
            value = parts[1];
            break;
        }
    }
    // 如果没有找到，返回空字符串
    return value || '';
}

/**
 * 获取电脑本身得google浏览器
 * @returns 
 */
function getChromePath(): Promise<string | null> {
    return new Promise((resolve) => {
        const command = 'where chrome';
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                resolve(null);
                return;
            }
            if (stderr) {
                console.error(`Error output: ${stderr}`);
                resolve(null);
                return;
            }
            const paths = stdout.trim().split('\n');
            if (paths.length > 0) {
                resolve(paths[0]);
            } else {
                resolve(null);
            }
        });
    });
}
// getBrowserPath();
// 动态获取浏览器路径（从压缩包中解压到）
async function getBrowserPath() {
    console.log(__dirname);
    if (isPackaged) {
        // 打包后：从临时目录解压浏览器
        const tmpDir = path.join(os.tmpdir(), 'asbdhsbd');
        const browserPath = path.join(tmpDir, 'chrome-win64/chrome.exe');
        if (!fs.existsSync(browserPath)) {
            // 将嵌入的浏览器解压到临时目录
            const sourcePath = path.join(process.execPath, '../browser/chrome-win64');
            // const sourcePath = path.join(__dirname, '../../browser/chrome-win64');
            fs.cpSync(sourcePath, tmpDir, { recursive: true });
        }
        return browserPath;
    } else {
        console.log("开发环境");
        // 开发环境：使用本地安装的浏览器
        return 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    }
}


async function createPage():Promise<any> {
    let chromePath = await getChromePath();
    if (chromePath == null || chromePath == '' || chromePath.length == 0) {
        chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
        console.log('没安装谷歌浏览器，请安装后重新运行程序');
        return;
    }
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromePath,
        defaultViewport: {
            width: 0,
            height: 0
        },
    });

    // 监听新窗口的创建事件
    browser.on('targetcreated', async target => {
        const newPage = await target.page();
        if (newPage) {
            console.log('New window opened:', newPage.url());
            // 关闭新窗口(此处是针对智联招聘平台的)
            if (newPage.url().indexOf('https://www.zhaopin.com/job-applied') != -1) {
                // 等待一段时间确保新窗口已经打开并关闭
                await new Promise(resolve => setTimeout(resolve, 2000));
                await newPage.close();
            }
            console.log('New window closed.');
        }
    });

    const page = await browser.newPage();
    return page;
}

/**
 * 根据cookie获取网站的登录信息
 * @param source 来源于那个网站
 * @returns 返回浏览器对象
 */
async function checkLoginStatu(source: string) {
    let chromePath = await getChromePath();
    if (chromePath == null || chromePath == '' || chromePath.length == 0) {
        chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
        console.log('没安装谷歌浏览器，请安装后重新运行程序');
        return;
    }
    console.log("chrome path", chromePath);
    const browser = await puppeteer.launch({
        // 需要在无头模式下使用Puppeteer，需要在启动浏览器时设置headless选项为true
        headless: false,
        // Puppeteer默认使用的是Chromium浏览器，如果你想使用Chrome浏览器，需要在启动浏览器时设置executablePath选项为Chrome浏览器的路径
        executablePath: chromePath,
        defaultViewport: {
            width: 0,
            height: 0
        },
        // 添加 Chrome 启动参数
        args: [
            '--disable-blink-features=AutomationControlled' // 关闭自动化控制检测
        ]
        // devtools: true, // 打开开发者工具
    });

    // 监听新窗口的创建事件
    browser.on('targetcreated', async target => {
        const newPage = await target.page();
        if (newPage) {
            console.log('New window opened:', newPage.url());
            // 关闭新窗口(此处是针对智联招聘平台的)
            if (newPage.url().indexOf('https://www.zhaopin.com/job-applied') != -1) {
                // 等待一段时间确保新窗口已经打开并关闭
                await new Promise(resolve => setTimeout(resolve, 2000));
                await newPage.close();
            }
            console.log('New window closed.');
        }
    });

    //开启新页面
    const page = await browser.newPage();

    switch (source) {
        case 'boss':
            await addCookies(bossCookieStr, page, bossDomain);
            break;
        case 'zhaopin':
            await addCookies(zhaopinCookieStr, page, zhaoPinDomain);
            break;
        case 'liepin':
            await addCookies(liepinCookieStr, page, liepinDomain);
            break;
        case 'job':
            await addCookies(jobCookieStr, page, jobDomain);
            break;
        default:
            await addCookies(bossCookieStr, page, bossDomain);
            break;
    }
    // 发送GET请求
    await delay(1000);
    //登录完以后，跳转到鉴权页面，测试一下是否已经进入系统
    switch (source) {
        case 'boss':
            const boosUrl = 'https://www.zhipin.com/wapi/zppassport/get/zpToken?v2=' + (new Date).getTime();
            await page.goto(boosUrl);
            break;
        case 'zhaopin':
            const zhaopinUrl = 'https://i.zhaopin.com/resume';
            await page.goto(zhaopinUrl);
            break;
        case 'liepin':
            const liepinUrl = 'https://c.liepin.com/resume/edit';
            await page.goto(liepinUrl);
            break;
        case 'job':
            const jobUrl = 'https://i.51job.com/resume/standard_resume.php';
            await page.goto(jobUrl);
            break;
        default:
            console.log('未指定登录来源');
            break;
    }

    return page;
}

/**
   * 根据浏览器获取的cookie字符串，组装成map
   * @param cookieStr 
   * @param page 
   * @param domain 
   */
async function addCookies(cookieStr: string, page: any, domain: string) {
    let cookies = cookieStr.split(';').map(
        pair => {
            let name = pair.trim().slice(0, pair.trim().indexOf('='));
            let value = pair.trim().slice(pair.trim().indexOf('=') + 1);
            return { name, value, domain }
        });
    await Promise.all(cookies.map(pair => {
        return page.setCookie(pair)
    }))
};


/**
 * JS设置cookie
 * @param name 
 * @param value 
 * @param daysToLive 
 */
async function setCookie(name: string, value: string, daysToLive: number) {
    var cookie = name + '=' + value;
    // 如果提供了daysToLive参数，则设置cookie的有效期
    if (typeof daysToLive === 'number') {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + daysToLive);
        cookie += '; expires=' + expirationDate.toUTCString();
    }
    document.cookie = cookie;
}

function getCurformatDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * 生成MD5摘要
 * @param text 输入的文本
 * @returns 32位的MD5摘要
 */
function generateMD5(text: string): string {
    const hash = createHash('md5');
    hash.update(text);
    return hash.digest('hex');
}

/**
 * 截取URL中'?'之前的内容
 * @param url 完整的URL
 * @returns '?'之前的内容
 */
function getBaseUrl(url: string): string {
    const questionMarkIndex = url.indexOf('?');
    if (questionMarkIndex !== -1) {
        return url.substring(0, questionMarkIndex);
    }
    return url; // 如果没有'?'，则返回原始URL
}


export {
    checkElementExit, checkElementExitNoDelay, checkLoginStatu, delay, addCookies,getBaseUrl,
    setCookie, getCookie, getCurformatDate, readCookie, obtainContentByFile, isDuplicateJob, generateMD5,createPage
};