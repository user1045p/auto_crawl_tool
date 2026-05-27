import { delay,getCurformatDate,checkElementExitNoDelay } from './common.util';
import { AutoChatDto } from 'src/entites/dto/AutoChatDto';
/**
 * 使用责任链模式，判断当前的岗位需不需要沟通
 * 刚刚活跃<今日活跃<3日内活跃<本周活跃<2周内活跃<本月活跃<2月内活跃<3月内活跃<4月内活跃<5月内活跃<近半年活跃<半年前活跃<其他
 */
function callActivityLevel(activeContent:string,originActiveLevel:number):boolean {
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
        '':13
    };
    return activityLevel[activeContent]<= originActiveLevel;
    
}

/**
 * 跳转扫码登录
 * @param page 
 */
async function login(page: any) {
    let loginUrl = 'https://www.liepin.com/login?backUrl=https%3A%2F%2Fwww.liepin.com%2F';
    await page.goto(loginUrl);
    await page.waitForSelector('.switch-type-mask-img-box');
    await page.click('.switch-type-mask-img-box');
    console.log(getCurformatDate()+" "+"请扫码登录！");
    await delay(2000);
    //写一个方法，隔两秒钟判断，如果登录成功，就跳转，如果未发现成功，则继续等待2秒钟
    while(true){
        if (page.isClosed()) {
            throw new Error('浏览器已关闭');
        }
        let url=await page.url();
        if(url.indexOf('https://c.liepin.com/')>-1){
            break;
        }
        await delay(2000);
    }
    console.log(getCurformatDate()+" "+"登录成功！");
}


async function checkLoginStatueError(page:any) {
    if (await checkElementExitNoDelay('#code-verify', page)) {
        console.log("系统检测操作状态异常，请验证！");
        await page.click('.code-btn');
        await delay(500);
        await page.focus('.ant-input');
        while(true){
            let content=await page.content();
            await delay(1000);
            if(await checkElementExitNoDelay('#code-verify', page)||content.indexOf("获取验证码")>-1||content.indexOf("账号行为异常")>-1){
                await delay(2500);
            }else{
                break;
            }
            await delay(1000);
        }
        console.log(getCurformatDate()+" "+"验证通过！");
    }
}

/**
 * 拼接参数成查询字符串
 * @param autoChatDto AutoChatDto 对象
 * @returns 拼接后的查询字符串
 */
function buildQueryParams(autoChatDto: AutoChatDto): string {
    const params = new URLSearchParams();
    // pubTime=&currentPage=2&pageSize=40&key=%E5%8A%A9%E7%90%86&suggestTag=&workYearCode=0&compId=&compName=&compTag=&industry=&salary=&jobKind=&compScale=&compKind=&compStage=&eduLevel=&ckId=bf9u64gjm7m9oi9rujvn9u99ecv9ai3a&scene=page&skId=csyas6pqirxyhwxpoaa7x8usq5du8dy8&fkId=bf9u64gjm7m9oi9rujvn9u99ecv9ai3a&sfrom=search_job_pc&suggestId=
    if (autoChatDto.jd) {
        params.append('key', autoChatDto.jd);
    }
    if (autoChatDto.countyId) {
        params.append('city', autoChatDto.countyId);
    }
    if (autoChatDto.streetId != '') {
        params.append('dq',  autoChatDto.streetId);
    }
    if (autoChatDto.degree && autoChatDto.degree !== '-1') {
        params.append('eduLevel', autoChatDto.degree);
    }
    if (autoChatDto.experience && autoChatDto.experience !== '-1') {
        params.append('workYearCode', autoChatDto.experience);
    }
    if (autoChatDto.jobType && autoChatDto.jobType !== '-1') {
        params.append('et', autoChatDto.jobType);
    }
    if (autoChatDto.salary && autoChatDto.salary !== '-1') {
        params.append('salary', autoChatDto.salary);
    }
    if (autoChatDto.size && autoChatDto.size !== '0') {
        params.append('cs', autoChatDto.size);
    }
    if (autoChatDto.nature && autoChatDto.nature !== '0') {
        params.append('ct', autoChatDto.nature);
    }
    if(autoChatDto.areaId){
        params.append('pubTime',autoChatDto.areaId);
    }
    return params.toString();
}

export {login,callActivityLevel,buildQueryParams,checkLoginStatueError };