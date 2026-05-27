import { AutoChatDto } from "../../entites/dto/AutoChatDto";
import { QueryParamDto } from "./job.types";
import { delay } from '../common/utils/tool.utils';

export class JobUtils {
    static toQueryParamDto(autoChatDto: AutoChatDto): QueryParamDto {
        return {
            keyword: autoChatDto.jd, // Changed from keyword to jd
            city: autoChatDto.areaId, // Changed from city to areaId
            greetSentence: autoChatDto.greeting || 'Hello,Is this job still available?Look forward to your reply.',
            active: autoChatDto.active || 3,
            degree: autoChatDto.degree,
            experience: autoChatDto.experience,
            salary: autoChatDto.salary,
            page: undefined, // autoChatDto.page doesn't exist
            exitAccount: autoChatDto.exitAccount,
            phone: autoChatDto.phone
        };
    }

    static buildQueryParams(autoChatDto: AutoChatDto): string {
        const params = new URLSearchParams();

        if (autoChatDto.jd) { // Changed from keyword to jd
            params.append('keyword', autoChatDto.jd);
        }

        if (autoChatDto.areaId) { // Changed from city to areaId
            params.append('city', autoChatDto.areaId);
        }

        // Add other parameters as needed
        return params.toString();
    }

    /**
 * 跳转扫码登录
 * @param page 
 */
    static async login(page: any) {
        let loginUrl = 'https://login.51job.com/login.php?lang=c&url=https%3A%2F%2Fwe.51job.com%2Fpc%2Fmy%2Fmyjob';
        await page.goto(loginUrl);
        await page.waitForSelector('.login_pass');
        await page.click('.passIcon');
        console.log(this.getCurformatDate() + " " + "请扫码登录！");
        await delay(2000);
        //写一个方法，隔两秒钟判断，如果登录成功，就跳转，如果未发现成功，则继续等待2秒钟
        while (true) {
            if (page.isClosed()) {
                throw new Error('浏览器已关闭');
            }
            let url = await page.url();
            if (url.indexOf('https://we.51job.com/pc/my/myjob') > -1) {
                break;
            }
            await delay(1500);
        }
        console.log(this.getCurformatDate() + " " + "登录成功！");
    }

    static getCurformatDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
}