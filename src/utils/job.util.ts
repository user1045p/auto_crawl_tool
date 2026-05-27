import * as crypto from 'crypto';
import { delay,getCurformatDate } from './common.util';
import { AutoChatDto } from 'src/entites/dto/AutoChatDto';

/**
 * 跳转扫码登录
 * @param page 
 */
async function login(page: any) {
    let loginUrl = 'https://login.51job.com/login.php?lang=c&url=https%3A%2F%2Fwe.51job.com%2Fpc%2Fmy%2Fmyjob';
    await page.goto(loginUrl);
    await page.waitForSelector('.login_pass');
    await page.click('.passIcon');
    console.log(getCurformatDate()+" "+"请扫码登录！");
    await delay(2000);
    //写一个方法，隔两秒钟判断，如果登录成功，就跳转，如果未发现成功，则继续等待2秒钟
    while(true){
        if (page.isClosed()) {
            throw new Error('浏览器已关闭');
        }
        let url=await page.url();
        if(url.indexOf('https://we.51job.com/pc/my/myjob')>-1){
            break;
        }
        await delay(1500);
    }
    console.log(getCurformatDate()+" "+"登录成功！");
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
    for (let i = 0; i < 5; i++) { // 尝试5次
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
    console.log('The content is:' + content)
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
 * 拼接参数成查询字符串
 * @param autoChatDto AutoChatDto 对象
 * @returns 拼接后的查询字符串
 */
function buildQueryParams(autoChatDto: AutoChatDto): string {
    const param = new URLSearchParams();
    //拼接URL参数
    if (autoChatDto.jd) {
        param.append('keyword', autoChatDto.jd);
    }
    if (autoChatDto.countyId) {
        param.append('jobArea', autoChatDto.countyId);
    }
    if (autoChatDto.countyId) {
        param.append('jobArea2', autoChatDto.countyId);
    }
    // if (autoChatDto.streetId) {
    //     param.append('landmark', autoChatDto.streetId);
    // }
    if (autoChatDto.degree && autoChatDto.degree !== '') {
        param.append('degree', autoChatDto.degree);
    }
    if (autoChatDto.experience && autoChatDto.experience !== '') {
        param.append('workYear', autoChatDto.experience);
    }
    if (autoChatDto.jobType && autoChatDto.jobType !== '') {
        param.append('jobType', autoChatDto.jobType);
    }
    if (autoChatDto.salary && autoChatDto.salary !== '') {
        param.append('salary', autoChatDto.salary);
    }
    // 可以根据需要添加更多字段
    return param.toString();
}




export { delay,login, attempt, generateUUID, removeEmojis, ensureElementExists,buildQueryParams };