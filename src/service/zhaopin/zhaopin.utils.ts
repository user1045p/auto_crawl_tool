import { AutoChatDto } from '../../entites/dto/AutoChatDto';
import { getCurformatDate, delay } from '../common/utils/tool.utils';
import { QueryParamDto } from './zhaopin.types';
import { JobDetail } from '../../entites/JobDetail';
import { splitUrl, generateUUID, removeEmojis, ensureElementExists } from '../../utils/zhaopin.util';
import { checkElementExit, checkElementExitNoDelay } from '../../utils/common.util';

export class ZhaopinUtils {
  static buildQueryParams(dto: QueryParamDto): string {
    // 实现构建查询参数的逻辑
    let param = new URLSearchParams();
    if (dto.jd) param.append('kw', dto.jd);
    if (dto.areaId) param.append('jl', dto.areaId);
    // 其他参数根据需要添加
    return param.toString();
  }

  static async login(page: any) {
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

  /**
     * 写一个方法，可以通过传过来的岗位为名称，然后拿到对对应编码好的URL
     * @param positionName 岗位名称
     */
  static async getUrlBySameParams(positionName: string, page: any) {
    await page.goto('https://www.zhaopin.com/sou/');
    //模拟点击搜索
    if (await checkElementExit('.query-search__content-input', page)) {
      try {
        await delay(400);
        await page.waitForSelector('.query-search__content-input');
        //给输入框添加焦点
        await page.focus('.query-search__content-input')
        //输入搜索词
        await page.type('.query-search__content-input', positionName, { delay: 100 });
        //点击搜索按钮
        await page.click('.query-search__content-button');
        await delay(100);
        //这里做测试，获取当前页的url链接
        await page.waitForSelector('.pagination__pages');
        const url = await page.$eval('.soupager__index--active', els => {
          return els.href.trim();
        });
        return this.extractKwFromUrl(url);
      } catch (error) {
        console.log(error);
      }
    }
  }

  static async extractKwFromUrl(url: string){
    const regex = /\/(kw[^/?]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }

  /**
   * 爬取详情页链接
   */
  static async crawlDetailUrl(page: any, pageNum: number, originUrl: string) {
    //处理url路径
    let tempUrl = splitUrl(originUrl);
    const allJobs = [];
    await page.goto(tempUrl.before + '/p' + pageNum + '?' + tempUrl.after);
    await page.waitForSelector('.positionlist__list');
    const jobs = await page.$eval('.positionlist__list', (el: any) => {
      return [...el.querySelectorAll('.joblist-box__item')].map((item: any) => {
        //这里有个bug,
        if (item.querySelector('.companyinfo__staff-state') != null) {
          return {
            company_name: item.querySelector('.companyinfo__name').textContent.trim(),
            job_name: item.querySelector('.jobinfo__name').textContent.trim(),
            detail_link: item.querySelector('a').href,
            //岗位活跃度=========我猜测是这个岗位最晚什么时候被人投递过=======
            recruitment_activity: item.querySelector('.companyinfo__staff-state').textContent.trim() || "",
            //公司标签：公司性质，公司规模，公司主要业务
            company_tag: [...item.querySelectorAll('.companyinfo__tag>.joblist-box__item-tag')].map((item: Element) => item.textContent.trim()).join(";") || "",
            //岗位标签：
            job_tag: [...item.querySelectorAll('.jobinfo__tag>.joblist-box__item-tag')].map((item: Element) => item.textContent.trim()).join(";") || "",
          }
        } else {
          return {
            company_name: item.querySelector('.companyinfo__name').textContent.trim(),
            job_name: item.querySelector('.jobinfo__name').textContent.trim(),
            detail_link: item.querySelector('a').href,
            //岗位活跃度========我猜测是这个岗位最晚什么时候被人投递过========
            recruitment_activity: "",
            //公司标签：公司性质，公司规模，公司主要业务
            company_tag: [...item.querySelectorAll('.companyinfo__tag>.joblist-box__item-tag')].map((item: Element) => item.textContent.trim()).join(";") || "",
            //岗位标签：
            job_tag: [...item.querySelectorAll('.jobinfo__tag>.joblist-box__item-tag')].map((item: Element) => item.textContent.trim()).join(";") || "",
          }
        }
      })
    });
    allJobs.push(...jobs);
    return allJobs;
  }

  /**
   * 访问岗位详情页
   * @param page 
   * @param job 工作信息
   */
  static async crawlJobDetail(page: any, job: JobDetail) {

    await page.goto(job.detail_link, { timeout: 10000 });
    //岗位发布时间（或者岗位更新版本后的时间）
    let publicTime = ''
    await page.waitForSelector('.summary-plane__time');
    if (await checkElementExit('.summary-plane__time', page)) {
      publicTime = await ensureElementExists('.summary-plane__time', page);
    }
    job.public_time = publicTime;

    //岗位名称
    await page.waitForSelector('.summary-plane__title');
    let positionName = ''
    if (await checkElementExit('.summary-plane__title', page)) {
      positionName = await ensureElementExists('.summary-plane__title', page);
    }
    job.position_name = positionName;

    //薪资
    let salary = ''
    await page.waitForSelector('.summary-plane__salary');
    if (await checkElementExit('.summary-plane__salary', page)) {
      await page.waitForFunction(
        () => document.querySelector('.summary-plane__salary')?.textContent.trim() !== ''
      );
      salary = await ensureElementExists('.summary-plane__salary', page);
    }
    job.salary = salary;

    //工作城市
    let city = '';
    await page.waitForSelector('.summary-plane__left');
    if (await checkElementExit('.summary-plane__left li:nth-child(1)', page)) {
      city = await ensureElementExists('.summary-plane__left li:nth-child(1)', page);
    }
    job.city = city;

    //街道
    let street = '';
    await page.waitForSelector('.summary-plane__left');
    if (await checkElementExit('.summary-plane__left li:nth-child(2)', page)) {
      street = await ensureElementExists('.summary-plane__left li:nth-child(2)', page);
    }
    job.street = street;

    //工作经验(年限)
    let experience = '';
    await page.waitForSelector('.summary-plane__left');
    if (await checkElementExit('.summary-plane__left li:nth-last-child(4)', page)) {
      experience = await ensureElementExists('.summary-plane__left li:nth-last-child(4)', page);
    }
    job.experience = experience;

    //教育背景
    let education = '';
    await page.waitForSelector('.summary-plane__left');
    if (await checkElementExit('.summary-plane__left li:nth-last-child(3)', page)) {
      education = await ensureElementExists('.summary-plane__left li:nth-last-child(3)', page);
    }
    job.education = education;

    //就业形式
    let employmentType = '';
    await page.waitForSelector('.summary-plane__left');
    if (await checkElementExit('.summary-plane__left li:nth-last-child(2)', page)) {
      employmentType = await ensureElementExists('.summary-plane__left li:nth-last-child(2)', page);
    }
    job.employment_type = employmentType;

    //招聘人数                    
    let headCount = '';
    await page.waitForSelector('.summary-plane__left');
    if (await checkElementExit('.summary-plane__left li:nth-last-child(1)', page)) {
      headCount = await ensureElementExists('.summary-plane__left li:nth-last-child(1)', page);
    }
    job.head_count = headCount;

    //职位描述
    let positionDesc = '';
    if (await checkElementExit('.describtion__detail-content', page)) {
      positionDesc = await ensureElementExists('.describtion__detail-content', page);
    }
    job.position_desc = removeEmojis(positionDesc);

    //所需技能
    let technologySkills = '';
    if (await checkElementExitNoDelay('.describtion__skills-content', page)) {
      technologySkills = await page.$$eval('.describtion__skills-item', (elements: any) => {
        if (!Array.isArray(elements)) {
          elements = [elements]; // 如果 elements 不是数组，则将其转换为数组
        }
        return elements.map((item: any) => item.textContent.trim()).join(';');
      });
    }
    job.technology_skills = technologySkills;

    //公司详细地址
    let address = ''
    if (await checkElementExit('.job-address__content-text', page)) {
      address = await ensureElementExists('.job-address__content-text', page);
    }
    job.address = address;

    //HR姓名
    let hr_name = ''
    if (await checkElementExit('.manager__detail-name', page)) {
      hr_name = await ensureElementExists('.manager__detail-name', page);
      hr_name = await page.$eval('.manager__detail-name', (el: any) => {
        return el.textContent.trim()
      });
    }
    job.human_resource_name = hr_name;

    //HR活跃程度
    let hr_activity = ''
    if (await checkElementExit('.manager__detail-label', page)) {
      hr_activity = await ensureElementExists('.manager__detail-label', page);
    }
    job.human_resource_activity = hr_activity;

    //公司名称
    let companyaName = ''
    if (await checkElementExit('.company__title', page)) {
      companyaName = await ensureElementExists('.company__title', page);
    }
    job.company_name = companyaName;

    //公司行业(业务)
    let companyIndustry = ''
    if (await checkElementExit('.company__industry', page)) {
      companyIndustry = await ensureElementExists('.company__industry', page);
    }
    job.company_industry = companyIndustry;

    //公司规模
    let companySize = ''
    if (await checkElementExit('.company__size', page)) {
      companySize = await ensureElementExists('.company__size', page);
    }
    job.company_size = companySize;

    //融资情况
    let fundStatus = ''
    if (await checkElementExit('.company__size', page)) {
      fundStatus = await ensureElementExists('.company__size', page);
    }
    job.fund_status = fundStatus;

    //公司简介
    let companyDesc = '';
    if (await checkElementExitNoDelay('.company__description', page)) {
      companyDesc = await ensureElementExists('.company__description', page);
    }
    job.company_desc = companyDesc;

    //============通用属性=============
    job.position_status = "正常"
    job.unique_id = generateUUID();
    job.record_status = 0;
    job.source_website = 2;

    return job;
  }
}