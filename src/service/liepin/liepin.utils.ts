import { Page } from 'puppeteer';
import { AutoChatDto } from '../../entites/dto/AutoChatDto';
import { ElementUtils } from '../common/utils/element.utils';
import { getCurformatDate, delay } from '../common/utils/tool.utils';
import { QueryParamDto } from './liepin.types';

export class LiepinUtils {
  static buildQueryParams(dto: QueryParamDto): string {
    let param = new URLSearchParams();
    //拼接URL参数
    if (dto.jd) param.append('key', dto.jd);
    // if (dto.areaId) param.append('city', dto.areaId);
    // if (dto.countyId) param.append('areaBusiness', dto.countyId);
    // if (dto.degree && dto.degree !== '0') param.append('degree', dto.degree);
    // if (dto.experience && dto.experience !== '0') param.append('experience', dto.experience);
    // if (dto.jobType && dto.jobType !== '0') param.append('jobType', dto.jobType);
    // if (dto.salary && dto.salary !== '0') param.append('salary', dto.salary);
    // if (dto.streetId != '') {
    //   return param.toString() + '%3A' + dto.streetId;
    // }
    return param.toString();
  }

  static callActivityLevel(activeText: string, activeLevel: number): boolean {
    //岗位活跃程度(默认本周活跃)
    //刚刚活跃（0）<今日活跃（1）<3日内活跃（2）<本周活跃（3）<2周内活跃<本月活跃<2月内活跃<3月内活跃<4月内活跃<5月内活跃<近半年活跃<半年前活跃<其他
    const levels = ['刚刚活跃', '今日活跃', '3日内活跃', '本周活跃', '2周内活跃', '本月活跃', '2月内活跃', '3月内活跃', '4月内活跃', '5月内活跃', '近半年活跃', '半年前活跃'];
    const index = levels.findIndex(level => activeText.includes(level));
    return index >= 0 && index <= activeLevel;
  }

  static async getJobDetails(page: Page) {
    return {
      desc: await ElementUtils.getText('.job-sec-text', page),
      experience: await ElementUtils.getText('.text-experiece', page),
      degree: await ElementUtils.getText('.text-degree', page),
      active: await ElementUtils.getText('.boss-active-time', page),
      address: await ElementUtils.getText('.location-address', page)
    };
  }

  /**
  * 跳转扫码登录
  * @param page 
  */
  static async login(page: any) {
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

  /**
   * Converts an AutoChatDto object to a QueryParamDto object
   * @param autoChatDto The AutoChatDto to convert
   * @returns A new QueryParamDto with the same properties as the input
   */
  static toQueryParamDto(autoChatDto: AutoChatDto): QueryParamDto {
    const queryParamDto: QueryParamDto = {
      jd: autoChatDto.jd,
      // areaId: autoChatDto.areaId,
      // countyId: autoChatDto.countyId,
      // streetId: autoChatDto.streetId,
      // degree: autoChatDto.degree,
      // experience: autoChatDto.experience,
      // jobType: autoChatDto.jobType,
      // salary: autoChatDto.salary,
      greeting: autoChatDto.greeting,
      active: autoChatDto.active,
      phone: autoChatDto.phone,
      exitAccount: autoChatDto.exitAccount
    };
    return queryParamDto;
  }
}