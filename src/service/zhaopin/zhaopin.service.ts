import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Page } from 'puppeteer';
import { User } from '../../entites/User';
import { AutoChatDto } from '../../entites/dto/AutoChatDto';
import { ZhaopinConfigService } from './zhaopin.config';
import { ZhaopinJobProcessor } from './job.processor';
import { QueryParamDto, BrowserSession } from './zhaopin.types';
import { ZhaopinUtils } from './zhaopin.utils';
import { ZhaopinDataService } from './data.service';
import { getCookiesAsText,checkLoginStatus,delay,createPage } from '../common/utils/puppeteer.utils';
import { ElementUtils } from '../common/utils/element.utils';
import { JobDetail } from '../../entites/JobDetail';
import { attempt, login, buildQueryParams, getUrlBySameParams } from '../../utils/zhaopin.util';
import { setZhaopinCookie } from '../common/config/puppeteer.config';

@Injectable()
export class ZhaopinService {
  constructor(
    private entityManager: EntityManager,
    private configService: ZhaopinConfigService,
    private jobProcessor: ZhaopinJobProcessor,
    private dataService: ZhaopinDataService
  ) { }

  /**
   * 启动自动打招呼
   */
  async startAutoChat(autoChatDto: AutoChatDto) {
    // 检查是否已有任务运行
    if (this.configService.getConfig().isRunning) {
      throw new Error('已有任务运行中');
    }
    
    //转换参数，把入参转换为queryParamDto
    const queryParamDto: QueryParamDto = ZhaopinUtils.toQueryParamDto(autoChatDto);
    
    try {
      this.configService.setRunningStatus(true);
      this.configService.updateConfig(queryParamDto);

      const session = await this.initBrowserSession(queryParamDto);
      await this.saveUserSession(session);
      await this.crawlProcess(session.page, autoChatDto); // 使用原始的AutoChatDto
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
        user.zhaopin_cookie = '';
      }
    }
    
    // 复用已有会话或创建新会话
    if (user?.zhaopin_cookie) {
      setZhaopinCookie(user.zhaopin_cookie)
      page = await checkLoginStatus('zhaopin');
      await delay(500);
      let content = await page.content();
      if (content.indexOf('微信扫码快捷登录') > -1) {
        await ZhaopinUtils.login(page);
      }
    } else {
      //开启新页面
      page = await createPage();
      await ZhaopinUtils.login(page);
      user = await this.dataService.updateUser(page, user);
    }
    return { page, user };
  }

  private async saveUserSession(session: BrowserSession) {
    if (!session.user) return;
    const cookies = await getCookiesAsText(session.page);
    session.user.zhaopin_cookie = cookies;
    await this.entityManager.save(User, session.user);
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
  private async crawlProcess(page: Page, dto: AutoChatDto) {
    let jd = await ZhaopinUtils.getUrlBySameParams(dto.jd, page);
    let lastParam = buildQueryParams(dto);
    let param = "https://www.zhaopin.com/sou/jl" + dto.areaId + "/" + jd + "/p1?" + lastParam;
    await page.goto(param);
    let totalPage = await this.obtainLastPage(page, param);
    for(let i = 1; i <= totalPage; i++){
      //每次访问一页
      const allJobs = await ZhaopinUtils.crawlDetailUrl(page, i, param);
      await this.processJobs(page, allJobs, false, true);
    }
  }

  private async processJobs(page: Page, jobs: JobDetail[], saveInfo: boolean, autoChat: boolean) {
    for (let i = 0; i < jobs.length; i++) {
      try {
        const job = new JobDetail();
        job.recruitment_activity = jobs[i].recruitment_activity;
        job.salary = jobs[i].salary;
        job.address = jobs[i].address;
        job.city = jobs[i].city;
        job.company_industry = jobs[i].company_industry;
        job.company_desc = jobs[i].company_desc;
        job.company_name = jobs[i].company_name;
        job.company_nature = jobs[i].company_nature;
        job.company_size = jobs[i].company_size;
        job.detail_link = jobs[i].detail_link;
        job.education = jobs[i].education;
        job.employment_type = jobs[i].employment_type;
        job.experience = jobs[i].experience;
        job.fund_status = jobs[i].fund_status;
        job.head_count = jobs[i].head_count;
        job.human_resource_activity = jobs[i].human_resource_activity;
        job.human_resource_name = jobs[i].human_resource_name;
        job.position_desc = jobs[i].position_desc;
        job.position_name = jobs[i].position_name;
        job.position_status = jobs[i].position_status;
        job.public_time = jobs[i].public_time;
        job.record_status = jobs[i].record_status;
        job.source_website = jobs[i].source_website;
        job.street = jobs[i].street;
        job.technology_skills = jobs[i].technology_skills;
        job.unique_id = jobs[i].unique_id;
        job.log_id = "log_id";
        await this.jobProcessor.processJob(page, job, {
          saveInfo: saveInfo,
          autoChat: autoChat
        });
      } catch (e) {
        throw new Error("程序中断，请重新启动程序！");
      }
    }
  }

  private handleError(error: Error) {
    console.error('智联招聘服务错误:', error.message);
    // 错误处理逻辑...
  }

  /**
   * 获取总页数
   */
  async obtainLastPage(page: any, originUrl: string) {
    await page.goto(originUrl, { timeout: 3000 });
    let total = 0;
    let pageNum = 10;
    while (true) {
      await delay(300);
      await page.waitForSelector('.positionlist__list');
      //使用输入数字点击的方式
      if (await ElementUtils.checkElementExit('.soupager__pagebox__goinp', page)) {
        try {
          await page.waitForSelector('.soupager__pagebox__goinp');
          //给输入框添加焦点
          await page.focus('.soupager__pagebox__goinp')
          //输入搜索词
          await page.type('.soupager__pagebox__goinp', pageNum.toString(), { delay: 50 });
          //点击搜索按钮
          await page.click('.soupager__pagebox__gobtn');
          await delay(100);
        } catch (e) {
          console.log(e, 'breakpoint testing')
        }
      }
      pageNum += 10;
      //这里获取disabled属性比较特殊，也是获取元素比较通用的方式
      const attributeValue = await page.$eval('.soupager a:nth-last-child(2)', (element: any) => element.getAttribute('disabled'));
      await page.waitForSelector('.soupager');
      if (attributeValue == null) {
        try {
          await attempt(() => {
            page.click('.soupager a:nth-last-child(2)').then(() => console.log("click successful!")).catch(() => { console.log('Click failed!') });
          }, 5); // 尝试5次
        } catch (error) {
          console.error('All attempts failed:', error);
        }
      }
      const href = await page.$eval('.soupager a:nth-last-child(2)', (e: any) => {
        return e.href;
      });
      console.log(href, attributeValue);
      if (attributeValue == "disabled") {
        console.log('已到最后一页', href);
        // 使用正则表达式匹配 'p' 后面的数字
        const regex = /p(\d+)/;
        const match = href.match(regex);
        if (match && match[1]) {
          total = parseInt(match[1]);
        } else {
          console.log('未找到匹配项');
        }
        break;
      }
    }
    return total - 1;
  }

  /**
   * 写一个方法，可以通过传过来的岗位为名称，然后拿到对对应编码好的URL
   * @param positionName 岗位名称
   */
  async startObtainUrlBySameParams(positionName: string) {
    let page: any = await checkLoginStatus('zhaopin');
    await page.goto('https://www.zhaopin.com/sou/');
    //模拟点击搜索
    if (await ElementUtils.checkElementExit('.query-search__content-input', page)) {
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
        const urls = await page.$eval('.soupager__index--active', (els: any) => {
          return els.href.trim();
        });
        console.log("测试拿到当前页面的url链接" + urls);
        return urls;
      } catch (error) {
        console.log(error);
      }
    }
  }

  /**
   * 方法三：进入聊天界面，回访打过招呼的岗位
   */
  async revisitAndChat() {
    //获取登录状态
    const page = await checkLoginStatus('zhaopin');

    await page.goto('https://www.zhipin.com/web/geek/chat');

    //1、鼠标停留在列表上方
    await delay(1000);
    while (true) {
      let element = await page.$("#container > div > div > div.list-warp > div > div.chat-content > div > div");
      let box = await element.boundingBox();
      // const x = box.x + (box.width / 2);
      // const y = box.y + (box.height / 2);
      const x = box.x + 50;
      const y = box.y + 50;

      await page.mouse.move(x, y);
      await page.mouse.click(x, y);

      await page.mouse.wheel({ deltaY: 78 }); // 向下滚动100像素

      await page.waitForSelector('#chat-input');
      await page.focus('#chat-input');

      await page.type('#chat-input', 'Good afternoon, my name is Tom, and I am grateful to see this position on the recruitment software.\n I am excited about the opportunity to apply for the position of telemarketing at your company. I am confident that my skills and experience align well with the requirements of this role.\nI have been following the success of your company in the field of telemarketing, and I am particularly interested in the role of telemarketing in ensuring quality products.\nCan I apply for this?', { delay: 50 }); // 输入变慢，像一个用户

      await page.keyboard.press('Enter');

      await delay(100);
    }
  }

  /**
   * 启动爬虫测试，保存数据
   * @returns 
   */
  async startSpider(data: any) {
    let page = null;
    try {
      if (!this.entityManager) {
        throw new Error('EntityManager is not defined');
      }
      let dataList = [];
      dataList = dataList.concat('https://www.zhaopin.com/sou/jl763/kwCLO66RKFQ222A/p1?kt=3');
      const startTime = new Date();
      for (let i = 0; i < dataList.length; i++) {
        console.log(dataList[i]);
        page = await checkLoginStatus('zhaopin');
        await page.goto(dataList[i]);
        const html = await page.content();
        const title = await page.title();
        console.log(html, title);
        const lastPageNumber = await this.obtainLastPage(page, dataList[i]);
        const allJobs = await ZhaopinUtils.crawlDetailUrl(page, lastPageNumber, dataList[i].substring(0, dataList[i].length - 6));
        //Crawl web detail page!
        await this.processJobs(page, allJobs, true, false);
      }
      const endTime = new Date();
      // 计算两个时间点之间的差值（以毫秒为单位）
      const timeDifferenceInMilliseconds = endTime.getTime() - startTime.getTime();
      // 将毫秒转换为秒
      const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000;
      console.log(`时间差为 ${timeDifferenceInSeconds} 秒`);
    } catch (e) {
      console.log(e, "Error reported，but need to continue running！")
    } finally {
      page.close();
    }
  }
}