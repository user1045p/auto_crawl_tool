import { Page } from 'puppeteer';
import { AutoChatDto } from '../../entites/dto/AutoChatDto';
import { ElementUtils } from '../common/utils/element.utils';
import { getCurformatDate, delay } from '../common/utils/tool.utils';
import { QueryParamDto } from './boss.types';

export class BossUtils {
  static buildQueryParams(dto: QueryParamDto): string {
    let param = new URLSearchParams();
    //拼接URL参数
    if (dto.jd) param.append('query', dto.jd);
    if (dto.areaId) param.append('city', dto.areaId);
    if (dto.countyId) param.append('areaBusiness', dto.countyId);
    if (dto.degree && dto.degree !== '0') param.append('degree', dto.degree);
    if (dto.experience && dto.experience !== '0') param.append('experience', dto.experience);
    if (dto.jobType && dto.jobType !== '0') param.append('jobType', dto.jobType);
    if (dto.salary && dto.salary !== '0') param.append('salary', dto.salary);
    if (dto.streetId != '') {
      return param.toString() + '%3A' + dto.streetId;
    }
    return param.toString();
  }

  static callActivityLevel(activeText: string, activeLevel: number): boolean {
    // 实现活跃度判断逻辑
    const levels = ['刚刚活跃', '今日活跃', '3日内活跃', '本周活跃'];
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
    let loginUrl = 'https://www.zhipin.com/web/user/?ka=header-login';
    await page.goto(loginUrl);
    //如果电话号码不为空，则使用短信验证码登录
    if ('' != '') {
      await page.waitForSelector('.phone-input-wrapper');
      await page.focus('.ipt-wrap')
      await page.type('.ipt-wrap input', 13827641045, { delay: 120 }); // 输入变慢，像一个用户
      await page.click('.btn-sms');
      console.log(getCurformatDate() + " " + "请手机号接收验证码登录！");
      await delay(2000);
      //写一个方法，隔两秒钟判断，如果登录成功，就跳转，如果未发现成功，则继续等待2秒钟
      while (true) {
        if (page.isClosed()) {
          throw new Error('浏览器已关闭');
        }
        let url = await page.url();
        if (url.indexOf('https://www.zhipin.com/web/geek/jobs') > -1) {
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
        if (url.indexOf('https://www.zhipin.com/web/geek/jobs') > -1) {
          break;
        }
        await delay(2000);
      }
    }
    console.log(getCurformatDate() + " " + "登录成功！");
  }

  /**
   * Converts an AutoChatDto object to a QueryParamDto object
   * @param autoChatDto The AutoChatDto to convert
   * @returns A new QueryParamDto with the same properties as the input
   */
  static toQueryParamDto(autoChatDto: AutoChatDto): QueryParamDto {
    const queryParamDto: QueryParamDto = {
      jd: autoChatDto.jd,
      areaId: autoChatDto.areaId,
      countyId: autoChatDto.countyId,
      streetId: autoChatDto.streetId,
      degree: autoChatDto.degree,
      experience: autoChatDto.experience,
      jobType: autoChatDto.jobType,
      salary: autoChatDto.salary,
      greeting: autoChatDto.greeting,
      active: autoChatDto.active,
      phone: autoChatDto.phone,
      exitAccount: autoChatDto.exitAccount,
      size: autoChatDto.size,
      nature: autoChatDto.nature
    };
    return queryParamDto;
  }

}