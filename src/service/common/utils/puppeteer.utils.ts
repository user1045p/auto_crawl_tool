import { Browser, Page } from 'puppeteer';
import { exec } from 'child_process';
import puppeteer from 'puppeteer';
import { BOSS_COOKIE, ZHAOPIN_COOKIE, LIEPIN_COOKIE, JOB_COOKIE } from '../config/puppeteer.config';
import { BOSS_DOMAIN, ZHAOPIN_DOMAIN, LIEPIN_DOMAIN, JOB_DOMAIN } from '../config/puppeteer.config';
import { BOOS_URL, ZHAOPIN_URL, LIEPIN_URL, JOB_URL } from '../config/puppeteer.config';
import { Logger } from '../../../logger/logger';
import { ScrollOptions } from '../types/puppeteer.types';
import { PageControlUtil } from './page.control.util';
const { connect } = require('puppeteer-real-browser');
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 实现创建页面的逻辑
 * @returns 
 */
export async function createPage(): Promise<Page> {
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
 * 实现创建页面的逻辑
 * @returns 
 */
export async function createPageByBoss(): Promise<Page> {
  let browser, page;
  try {
    // 使用 connect 方法启动并连接到一个高度伪装的浏览器实例
    const connection = await connect({
      // 关键配置：
      headless: false,          // 必须为 false，显示浏览器窗口，这是最稳定的模式 [citation:1]
      turnstile: true,           // 自动处理 Cloudflare Turnstile 验证码 [citation:2]

      // 启动参数：让窗口最大化，看起来更自然
      args: ['--start-maximized'],

      // 连接选项：设置视口自适应窗口大小，避免固定尺寸被检测
      connectOption: {
        defaultViewport: null,   // 关键！让视口大小跟随窗口，避免 0x0 这种不自然的尺寸 [citation:2]
      },

      // 如果需要使用代理，可以在这里取消注释并配置
      // proxy: {
      //     host: 'your-proxy-host',
      //     port: 'your-proxy-port',
      //     username: 'your-username',
      //     password: 'your-password'
      // }

      // 在 Linux 系统上，如果不想使用虚拟显示，可以设为 true
      // disableXvfb: false,

      // 如果你想加载 puppeteer-extra 插件，可以在这里添加
      // plugins: []
    });

    browser = connection.browser;
    page = connection.page; // connect 方法默认会创建一个新页面

  } catch (error) {
    console.error('脚本运行出错:', error);
    if (browser) {
      await browser.close();
    }
  }
  return page;
}

/**
 * 获取电脑本身的google浏览器
 * @returns 
 */
export function getChromePath(): Promise<string | null> {
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

export async function checkLoginStatusByBoss(platform: string): Promise<Page> {

  let browser, page;

  try {
    // 使用 connect 方法启动并连接到一个高度伪装的浏览器实例
    const connection = await connect({
      // 关键配置：
      headless: false,          // 必须为 false，显示浏览器窗口，这是最稳定的模式 [citation:1]
      turnstile: true,           // 自动处理 Cloudflare Turnstile 验证码 [citation:2]

      // 启动参数：让窗口最大化，看起来更自然
      args: ['--start-maximized'],

      // 连接选项：设置视口自适应窗口大小，避免固定尺寸被检测
      connectOption: {
        defaultViewport: null,   // 关键！让视口大小跟随窗口，避免 0x0 这种不自然的尺寸 [citation:2]
      },

      // 如果需要使用代理，可以在这里取消注释并配置
      // proxy: {
      //     host: 'your-proxy-host',
      //     port: 'your-proxy-port',
      //     username: 'your-username',
      //     password: 'your-password'
      // }

      // 在 Linux 系统上，如果不想使用虚拟显示，可以设为 true
      // disableXvfb: false,

      // 如果你想加载 puppeteer-extra 插件，可以在这里添加
      // plugins: []
    });

    browser = connection.browser;
    // page = connection.page; // connect 方法默认会创建一个新页面

    let page: Page = await DynamicalConfigCookies(browser, platform);

    return page;
  } catch (error) {
    console.error('脚本运行出错:', error);
    if (browser) {
      await browser.close();
    }
  }


}

export async function checkLoginStatus(platform: string): Promise<Page> {
  console.log('Checking login status...',platform);
  
  // 实现检查登录状态的逻辑
  let chromePath = await getChromePath();
  if (chromePath == null || chromePath == '' || chromePath.length == 0) {
    chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    Logger.error('未安装谷歌浏览器，请安装后重新运行程序');
    return;
  }
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
      '--disable-blink-features=AutomationControlled', // 关闭自动化控制检测
      // '--window-size=200,600' // 初始窗口大小
    ]
    // devtools: true, // 打开开发者工具
  });
  // 监听新窗口的创建事件
  browser.on('targetcreated', async target => {
    const newPage = await target.page();
    if (newPage) {
      if (PageControlUtil.getInstance().getShouldCloseNewPages() && newPage.url().indexOf('https://www.www.com/job_detail') != -1) {
        // 等待一段时间确保新窗口已经打开并关闭
        await new Promise(resolve => setTimeout(resolve, 2000));
        await newPage.close();
      }
    }
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
  const page: Page = await DynamicalConfigCookies(browser, platform);
  return page;
}

export async function DynamicalConfigCookies(browser: Browser, platform: string): Promise<Page> {
  //开启新页面
  const page = await browser.newPage();
  switch (platform) {
    case 'boss':
      await addCookies(BOSS_COOKIE, page, BOSS_DOMAIN);
      await delay(1000);
      await page.goto(BOOS_URL);
      break;
    case 'zhaopin':
      await addCookies(ZHAOPIN_COOKIE, page, ZHAOPIN_DOMAIN);
      await delay(1000);
      await page.goto(ZHAOPIN_URL);
      break;
    case 'liepin':
      await addCookies(LIEPIN_COOKIE, page, LIEPIN_DOMAIN);
      await delay(1000);
      await page.goto(LIEPIN_URL);
      break;
    case 'job':
      await addCookies(JOB_COOKIE, page, JOB_DOMAIN);
      await delay(1000);
      await page.goto(JOB_URL);
      break;
    default:
      await addCookies(BOSS_COOKIE, page, BOSS_DOMAIN);
      await delay(1000);
      await page.goto(BOOS_URL);
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
export async function addCookies(cookieStr: string, page: any, domain: string) {
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

export async function getCookiesAsText(page: Page): Promise<string> {
  const cookies = await page.cookies();
  return cookies.map(c => `${c.name}=${c.value}`).join('; ');
}

/**
 * 控制网页滑动
 * @param page Page对象
 * @param options 滑动配置选项
 */
export async function scrollPage(page: Page, options?: ScrollOptions) {
  // 解析配置参数（带默认值）
  const {
    minDistance = 200,
    maxDistance = 1000,
    duration = 1000,
    step = 20,
    direction = 'down',
    times,
    waitAfterScroll = 0
  } = options || {};

  // 计算实际滚动距离（带方向）
  const getScrollDistance = () => {
    const distance = Math.floor(Math.random() * (maxDistance - minDistance + 1)) + minDistance;
    return direction === 'up' ? -distance : distance;
  };

  // 执行单次滚动
  const scrollOnce = async () => {
    const scrollDistance = getScrollDistance();
    const stepValue = direction === 'up' ? -Math.abs(step) : Math.abs(step);
    const steps = Math.ceil(Math.abs(scrollDistance) / Math.abs(stepValue));
    const interval = duration / steps;

    await page.evaluate(({ stepValue, steps, interval }) => {
      return new Promise<void>((resolve) => {
        let currentStep = 0;
        const scrollInterval = setInterval(() => {
          window.scrollBy(0, stepValue);
          if (++currentStep >= steps) {
            clearInterval(scrollInterval);
            resolve();
          }
        }, interval);
      });
    }, { stepValue, steps, interval });

    // 滚动后等待
    if (waitAfterScroll > 0) {
      await new Promise(resolve => setTimeout(resolve, waitAfterScroll));
    }
  };

  // 控制滚动次数
  if (times !== undefined) {
    for (let i = 0; i < times; i++) {
      await scrollOnce();
    }
  } else {
    while (true) {
      await scrollOnce();
    }
  }
}