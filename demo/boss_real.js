// 使用 CommonJS 语法 (推荐)
const { connect } = require('puppeteer-real-browser');

// 自定义延迟函数，用于等待验证码解决或页面加载
function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

async function start() {
    console.log('正在启动真实浏览器环境...');
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

        console.log('浏览器已启动，正在访问目标网站...');
        // 访问 BOSS直聘 页面
        await page.goto('https://www.zhipin.com/web/geek/jobs?query=&city=101280100&position=100101', {
            waitUntil: 'networkidle2', // 等待网络空闲，确保页面主要资源加载完成
            timeout: 60000,             // 设置60秒超时
        });

        console.log('页面加载完成，等待可能的验证码处理或页面稳定...');
        // 给页面和可能的验证码处理一点时间 (例如等待10秒)
        // turnstile: true 会让库自动尝试点击 Turnstile 验证码 [citation:2]
        await delay(15000); // 等待15秒，让所有检测脚本运行完毕

        // 可选：模拟一些人类行为，比如滚动页面，让会话更真实
        console.log('模拟页面滚动...');
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight / 2);
        });
        await delay(2000);

        // 在这里，你可以开始你的数据抓取逻辑
        // 例如，等待某个关键元素出现，确认已成功进入页面
        try {
            // 尝试等待一个招聘列表中常见的元素，例如职位卡片
            await page.waitForSelector('.job-list', { timeout: 10000 });
            console.log('成功进入页面，职位列表已加载。');
            
            // 在此处编写你的抓取代码...
            // const jobs = await page.$$eval('.job-card', ...)

        } catch (selectorError) {
            console.log('未找到预期的职位列表元素，可能仍然被拦截或页面结构有变。');
            // 可以在这里保存截图用于调试
            await page.screenshot({ path: 'debug-screenshot.png' });
            console.log('已保存调试截图到 debug-screenshot.png');
        }

        // 如果你不想立即关闭浏览器，可以注释掉下一行，以便手动观察
        // await browser.close();

    } catch (error) {
        console.error('脚本运行出错:', error);
        if (browser) {
            await browser.close();
        }
    }
}

// 启动脚本
start();