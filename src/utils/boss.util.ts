import { delay, getCurformatDate } from '../utils/common.util';
import { AutoChatDto } from 'src/entites/dto/AutoChatDto';
const fs = require('fs');
/**
 * 使用责任链模式，判断当前的岗位需不需要沟通
 * 刚刚活跃<今日活跃<3日内活跃<本周活跃<2周内活跃<本月活跃<2月内活跃<3月内活跃<4月内活跃<5月内活跃<近半年活跃<半年前活跃<其他
 */
function callActivityLevel(activeContent: string, originActiveLevel: number): boolean {
    console.log(activeContent);
    //给"刚刚活跃<今日活跃<3日内活跃<本周活跃<2周内活跃<本月活跃<2月内活跃<3月内活跃<4月内活跃<5月内活跃<近半年活跃<半年前活跃<其他"构建一个对象，分别给权值，从0开始
    let activityLevel = {
        '刚刚活跃': 0,
        '今日活跃': 1,
        '3日内活跃': 2,
        '本周活跃': 3,
        '2周内活跃': 4,
        '本月活跃': 5,
        '2月内活跃': 6,
        '3月内活跃': 7,
        '4月内活跃': 8,
        '5月内活跃': 9,
        '近半年活跃': 10,
        '半年前活跃': 11,
        '其他': 12,
        '': 13
    };
    return activityLevel[activeContent] <= originActiveLevel;
}

/**
 * 跳转扫码登录
 * @param page 
 */
async function login(page: any, autoChatDto: AutoChatDto) {
    let loginUrl = 'https://www.zhipin.com/web/user/?ka=header-login';
    await page.goto(loginUrl);

    //如果电话号码不为空，则使用短信验证码登录
    if (autoChatDto.phone != '') {
        await page.waitForSelector('.phone-input-wrapper');
        await page.focus('.ipt-wrap')
        await page.type('.ipt-wrap input', autoChatDto.phone, { delay: 120 }); // 输入变慢，像一个用户
        await page.click('.btn-sms');
        console.log(getCurformatDate() + " " + "请手机号接收验证码登录！");
        await delay(2000);
        //写一个方法，隔两秒钟判断，如果登录成功，就跳转，如果未发现成功，则继续等待2秒钟
        while (true) {
            if (page.isClosed()) {
                throw new Error('浏览器已关闭');
            }
            let url = await page.url();
            if (url.indexOf('https://www.zhipin.com/web/geek/job-recommend') > -1) {
                break;
            }
            await delay(2000);
        }
    } else {
        await page.waitForSelector('.switch-tip');
        await page.click('.switch-tip');
        console.log(getCurformatDate() + " " + "请扫码登录！");
        await delay(2000);
        //写一个方法，隔两秒钟判断，如果登录成功，就跳转，如果未发现成功，则继续等待2秒钟
        while (true) {
            if (page.isClosed()) {
                throw new Error('浏览器已关闭');
            }
            let url = await page.url();
            if (url.indexOf('https://www.zhipin.com/web/geek/job-recommend') > -1) {
                break;
            }
            await delay(2000);
        }
    }
    console.log(getCurformatDate() + " " + "登录成功！");
}


/**
 * 构建查询参数
 * @param autoChatDto 
 * @returns 
 */
function buildQueryParams(autoChatDto: AutoChatDto): string {
    let param = new URLSearchParams();
    //拼接URL参数
    if (autoChatDto.jd) {
        param.append('query', autoChatDto.jd);
    }
    if (autoChatDto.areaId) {
        param.append('city', autoChatDto.areaId);
    }
    if (autoChatDto.countyId) {
        param.append('areaBusiness', autoChatDto.countyId);
    }
    if (autoChatDto.degree && autoChatDto.degree !== '0') {
        param.append('degree', autoChatDto.degree);
    }
    if (autoChatDto.experience && autoChatDto.experience !== '0') {
        param.append('experience', autoChatDto.experience);
    }
    if (autoChatDto.jobType && autoChatDto.jobType !== '0') {
        param.append('jobType', autoChatDto.jobType);
    }
    if (autoChatDto.salary && autoChatDto.salary !== '0') {
        param.append('salary', autoChatDto.salary);
    }
    if (autoChatDto.streetId != '') {
        return param.toString() + '%3A' + autoChatDto.streetId;
    }
    return param.toString();
}

export { login, callActivityLevel, buildQueryParams };