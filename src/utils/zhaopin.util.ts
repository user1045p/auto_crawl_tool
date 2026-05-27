import * as crypto from 'crypto';
import { delay, getCurformatDate,checkElementExit } from './common.util';
import { AutoChatDto } from 'src/entites/dto/AutoChatDto';
/**
 * 跳转扫码登录
 * @param page 
 */
async function login(page: any) {
    let loginUrl = 'https://passport.zhaopin.com/login?bkUrl=%2F%2Fi.zhaopin.com%2Fblank%3Fhttps%3A%2F%2Fwww.zhaopin.com%3FvalidateCampus%3D';
    await page.goto(loginUrl);
    await page.waitForSelector('.zppp-panel-normal-bar__img');
    await page.click('.zppp-panel-normal-bar__img');
    console.log(getCurformatDate() + " " + "请扫码登录！");
    await delay(2000);
    //写一个方法，隔两秒钟判断，如果登录成功，就跳转，如果未发现成功，则继续等待2秒钟
    while (true) {
        if (page.isClosed()) {
            throw new Error('浏览器已关闭');
        }
        let url = await page.url();
        if (url.indexOf('https://i.zhaopin.com') > -1) {
            break;
        }
        await delay(1500);
    }
    console.log(getCurformatDate() + " " + "登录成功！");
}

/**
 * 尝试函数
 * @param fn 需要执行的函数
 * @param retries 尝试次数
 * @param delay 延时时间
 * @returns 
 */
function attempt(fn: Function, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attemptFunction = (remainingRetries: number, error: undefined) => {
            if (remainingRetries === 0) {
                reject(error);
                return;
            }
            try {
                const result = fn();
                resolve(result);
            } catch (error: any) {
                setTimeout(() => {
                    attemptFunction(remainingRetries - 1, error);
                }, delay);
            }
        };
        attemptFunction(retries, null);
    });
}


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


/**
 * 生成一个32位的UUID
 * @returns 32位的UUID字符串
 */
function generateUUID(): string {
    // 生成16个随机字节
    const buffer = new Uint8Array(16);
    crypto.getRandomValues(buffer);

    // 设置UUID版本（4）和变体（2）
    buffer[7] = (buffer[7] & 0x0f) | 0x40;
    buffer[8] = (buffer[8] & 0x3f) | 0x80;

    // 将16个字节转换为32位的字符串
    let uuid = '';
    for (let i = 0; i < buffer.length; i++) {
        uuid += buffer[i].toString(16).padStart(2, '0');
    }

    return uuid;
}

/**
 * 确保某个元素存在并返回内容
 */
async function ensureElementExists(element: any, page: any): Promise<string> {
    let content = '';
    for (let i = 0; i < 3; i++) { // 尝试3次
        try {
            await page.waitForSelector(element, { timeout: 5000 });
            content = await page.$eval(element, el => el.textContent.trim());
            if (content) break; // 如果获取到内容，跳出循环
        } catch (error) {
            console.error(`Attempt ${i + 1} failed:`, error);
            await page.waitForTimeout(1000); // 等待1秒后重试
        }
    }
    if (!content) {
        console.log('Failed to get the title after multiple attempts.' + 'The error content is:' + content)
        console.error('Failed to get the title after multiple attempts.');
    }
    // console.log('The content is:' + content)
    await delay(200); // 等待0.2秒钟
    return content;
}

/**
 * 字符串去除所包含的表情包
 * @param content 
 * @returns 
 */
function removeEmojis(content: string): string {
    content = content.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|[\uD800-\uDBFF]|[\uDC00-\uDFFF]|[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g, '')
    let conByte = new TextEncoder().encode(content);
    for (let i = 0; i < conByte.length; i++) {
        if ((conByte[i] & 0xF8) == 0xF0) {
            for (let j = 0; j < 4; j++) {
                conByte[i + j] = 0x30;
            }
            i += 3;
        }
    }
    content = new TextDecoder("utf-8").decode(conByte);
    return content;
}


/**
 * 构建查询参数
 * @param autoChatDto 
 * @returns 
 */
function buildQueryParams(autoChatDto: AutoChatDto): string {
    let param = new URLSearchParams();
    // https://www.zhaopin.com/sou/jl763/kwCLO66RII0PJP0/p1?we=0000&et=2&ct=1&cs=1&el=9&kt=3
    // sl=0000,4000---薪资要求
    // el=9----学历
    // we=0103---工作经验
    // et=2---职业类型
    // ct=1---公司性质
    // cs=3----公司规模
    // re=4342---行政区
    //拼接URL参数
    if (autoChatDto.countyId) {
        param.append('re', autoChatDto.countyId);
    }
    if (autoChatDto.degree && autoChatDto.degree !== '-1') {
        param.append('el', autoChatDto.degree);
    }
    if (autoChatDto.experience && autoChatDto.experience !== '-1') {
        param.append('we', autoChatDto.experience);
    }
    if (autoChatDto.jobType && autoChatDto.jobType !== '-1') {
        param.append('et', autoChatDto.jobType);
    }
    if (autoChatDto.salary && autoChatDto.salary !== '-1') {
        param.append('sl', autoChatDto.salary);
    }
    if (autoChatDto.size && autoChatDto.size !== '0') {
        param.append('cs', autoChatDto.size);
    }
    if (autoChatDto.nature && autoChatDto.nature !== '0') {
        param.append('ct', autoChatDto.nature);
    }
    return param.toString();
}

/**
     * 写一个方法，可以通过传过来的岗位为名称，然后拿到对对应编码好的URL
     * @param positionName 岗位名称
     */
async function getUrlBySameParams(positionName:string,page:any) {
    await page.goto('https://www.zhaopin.com/sou/');
    //模拟点击搜索
    if (await checkElementExit('.query-search__content-input', page)) {
        try {
            await page.waitForSelector('.query-search__content-input');
            //给输入框添加焦点
            await page.focus('.query-search__content-input')
            //输入搜索词
            await page.type('.query-search__content-input', positionName, { delay: 50 });
            //点击搜索按钮
            await page.click('.query-search__content-button');
            await delay(100);
            //这里做测试，获取当前页的url链接
            await page.waitForSelector('.pagination__pages');
            const url = await page.$eval('.soupager__index--active', els => {
                return els.href.trim();
            });
            return extractKwFromUrl(url);
        } catch (error) {
            console.log(error);
        }
    }
}
function extractKwFromUrl(url: string): string | null {
    const regex = /\/(kw[^/?]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}


function splitUrl(url: string): { before: string, p1: string, after: string } {
    const regex = /(.*?)(\/p1\?)(.*)/;
    const match = url.match(regex);
    if (match && match.length === 4) {
        return {
            before: match[1],
            p1: match[2],
            after: match[3]
        };
    }
    return {
        before: url,
        p1: '',
        after: ''
    };
}

export {splitUrl, login, setCookie, attempt, generateUUID, removeEmojis, buildQueryParams, ensureElementExists,getUrlBySameParams };