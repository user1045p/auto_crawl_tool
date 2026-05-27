import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Page } from 'puppeteer';
import { User } from '../../entites/User';
import { AutoChatDto } from '../../entites/dto/AutoChatDto';
import { LiepinConfigService } from './liepin.config';
import { JobProcessor } from './job.processor';
import { BrowserSession, QueryParamDto } from './liepin.types';
import { LiepinUtils } from './liepin.utils';
import { DataService } from './data.service';
import { createPage, checkLoginStatus, getCookiesAsText, delay } from '../common/utils/puppeteer.utils';
import { setLiepinCookie } from '../common/config/puppeteer.config';

@Injectable()
export class LiepinService {
  constructor(
    private entityManager: EntityManager,
    private configService: LiepinConfigService,
    private jobProcessor: JobProcessor,
    private dataService: DataService
  ) { }

  async startAutoChat(autoChatDto: AutoChatDto) {
    // 检查是否已有任务运行
    if (this.configService.getConfig().isRunning) {
      throw new Error('已有任务运行中');
    }
    //转换参数，把入参转换为queryParamDto
    const queryParamDto: QueryParamDto = LiepinUtils.toQueryParamDto(autoChatDto);
    try {
      this.configService.setRunningStatus(true);
      this.configService.updateConfig(queryParamDto);

      const session = await this.initBrowserSession(queryParamDto);
      await this.saveUserSession(session);
      await this.crawlProcess(session.page, queryParamDto);
    } catch (error) {
      this.handleError(error);
    } finally {
      this.configService.setRunningStatus(false);
    }
  }

  private async initBrowserSession(dto: QueryParamDto): Promise<BrowserSession> {
    let user = await this.dataService.queryUserById(1);
    let page: Page;
    // 重置cookie如果需要
    if (dto.exitAccount === 'true' || dto.phone) {
      if (user) {
        user.liepin_cookie = '';
      }
    }
    // 复用已有会话或创建新会话
    if (user?.liepin_cookie) {
      setLiepinCookie(user.liepin_cookie)
      page = await this.resumeSession(user);
      //兜底：可能会登录过期了
      await delay(2000);
      let currentUrl = await page.url();
      if (currentUrl.indexOf('loginBackUrl') > -1) {
        await LiepinUtils.login(page);
        user = await this.saveUserInfo(page, user);
      }
    } else {
      page = await createPage();
      await LiepinUtils.login(page);
      user = await this.saveUserInfo(page, user);
    }
    return { page, user };
  }

  private async resumeSession(user: User): Promise<Page> {
    const page = await checkLoginStatus('liepin');
    const content = await page.content();
    // if (content.includes('当前登录状态已失效')) {
    //   Logger.error('会话已失效，请重新登录');
    //   await LiepinUtils.login(page);
    //   await this.saveUserInfo(page, user);
    // }
    return page;
  }

  /**
   * 主要逻辑
   * 1、滑动页面找到职位列表,并逐个点击
   * 2、获取职位的详情
   * 3、通过获取详情里面的内容是否符合需求
   * 4、符合则进行打招呼
   * @param page 
   * @param dto 
   */
  private async crawlProcess(page: Page, dto: QueryParamDto) {
    const params = LiepinUtils.buildQueryParams(dto);
    const baseUrl = `https://www.liepin.com/zhaopin/?${params}`;
    await this.getJobListAndHandle(page, baseUrl);
  }

  /**
   * 方案：
   *    1、一次性刷新完岗位列表信息（不太符合常理）
   *    2、动态采集岗位信息，并实现逐个访问详情（目前采用这种方式）
   * @param page 
   * @param url 
   * @returns 
   */
  private async getJobListAndHandle(page: Page, url: string): Promise<void> {
    const totalPage = Number(await this.obtainTotalPage(page, url));
    for (let i = 1; i <= totalPage; i++) {
      const allJobs = await this.crawlDetailUrl(page, i, url);
      await this.jobProcessor.processJob(page, allJobs, { saveInfo: false, autoChat: true }, this.configService.getConfig().greetSentence);
    }
  }

  /**
   * 截取字符串
   */
  async obtainTotalPage(page: any, originUrl: string): Promise<string> {
    await page.goto(originUrl);
    await page.waitForSelector('.job-list-box');
    await page.waitForSelector('.list-pagination-box');

    // 获取总页数 - 修改选择器以匹配实际的分页结构
    const totalPage = await page.$eval('.list-pagination-box li:nth-last-child(2)', (e: { textContent: string; }) => {
      return parseInt(e.textContent).toString();
    });
    return totalPage;
  }

  /**
   * 爬取详情页链接
   */
  async crawlDetailUrl(page: any, pageNum: number, originUrl: string) {
    await delay(Math.floor(Math.random() * 2000) + 1000);

    await page.goto(originUrl + '&currentPage=' + (pageNum - 1));

    await page.waitForSelector('.job-list-box');

    // 修改选择器以匹配实际的DOM结构
    const jobs = await page.evaluate((originUrl: string) => {
      const jobList: any[] = [];
      const jobCards = document.querySelectorAll('.job-card-pc-container');

      jobCards.forEach((item: Element) => {
        const companyElement = item.querySelector('.company-name');
        const jobTitleElement = item.querySelector('.job-title-box');
        const areaElement = item.querySelector('.job-dq-box');
        const salaryElement = item.querySelector('.job-salary');
        const linkElement = item.querySelector('a');

        if (companyElement && jobTitleElement && areaElement && salaryElement && linkElement) {
          jobList.push({
            company: {
              name: companyElement.textContent,
            },
            job: {
              name: jobTitleElement.textContent,
              area: areaElement.textContent,
              salary: salaryElement.textContent,
            },
            link: new URL(linkElement.getAttribute('href'), originUrl).href,
          });
        }
      });

      return jobList;
    }, originUrl);
    return jobs;
  }

  private async saveUserSession(session: BrowserSession) {
    if (!session.user) return;
    const cookies = await getCookiesAsText(session.page);
    session.user.liepin_cookie = cookies;
    await this.entityManager.save(User, session.user);
  }

  private handleError(error: Error) {
    console.error('猎聘服务错误:', error.message);
    // 其他错误处理逻辑...
  }

  private async saveUserInfo(page: Page, user: User): Promise<User> {
    // 获取所有cookie,并保存起来，方便下次免登录使用
    const client = await page.target().createCDPSession();
    const cookieArr = await client.send('Network.getAllCookies');
    let cookies = cookieArr.cookies;
    let cookieText = '';
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      cookieText += cookie.name + '=' + cookie.value + (i < cookies.length - 1 ? '; ' : '');
    }
    if (user == null) {
      const newUser = new User();
      newUser.username = "admin";
      newUser.password = "admin";
      newUser.phone = "12345678901";
      newUser.email = "admin@admin.com";
      newUser.last_login = "11";
      newUser.sex = "男";
      newUser.liepin_cookie = cookieText;
      await this.entityManager.save(User, newUser);
    } else {
      user.liepin_cookie = cookieText;
      await this.entityManager.update(User, { id: user.id }, user);
    }
    return user;
  }

  /**
   * 启动爬虫测试，保存数据
   * @returns 
   */
  async startSpider() {
    try {
      const page = await checkLoginStatus('liepin');

      await page.goto('https://www.liepin.com/web/geek/chat');

      await delay(200);
      let jobList = ['Java开发'];
      let cityList = ['101280100'];
      for (let i = 0; i < jobList.length; i++) {
        for (let j = 0; j < cityList.length; j++) {
          let originUrl = 'https://www.liepin.com/zhaopin/?' + 'key=' + jobList[i];
          //  + '&city=' + cityList[j];

          const totalPage = Number(await this.obtainTotalPage(page, originUrl));

          for (let k = 1; k <= totalPage; k++) {
            const allJobs = await this.crawlDetailUrl(page, k, originUrl);
            await this.jobProcessor.processJob(page, allJobs, { saveInfo: true, autoChat: false }, this.configService.getConfig().greetSentence);
          }
        }
      }
    } catch (e) {
      console.log(e, "Error reported，but need to continue running！")
    }
  }
}