import { Injectable, Logger } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from '../../entites/User';
import { AutoChatDto } from '../../entites/dto/AutoChatDto';
import { JobConfigService } from './job.config';
import { JobProcessor } from './job.processor';
import { JobUtils } from './job.utils';
import { JobDataService } from './data.service';
import { createPage, checkLoginStatus, delay } from '../common/utils/puppeteer.utils';
import { setJobCookie } from '../common/config/puppeteer.config';
import { ElementUtils } from '../common/utils/element.utils';
import { Page } from 'puppeteer';
import { EventEmitter } from 'events';

@Injectable()
export class JobService {
  private logger = new Logger(JobService.name);
  //标识程序是否在运行中
  public startUpFlag: boolean = false;

  constructor(
    private entityManager: EntityManager,
    private configService: JobConfigService,
    private jobProcessor: JobProcessor,
    private dataService: JobDataService
  ) { }

  /**
   * 启动自动打招呼
   */
  async startAutoChat(autoChatDto: AutoChatDto) {
    if (this.startUpFlag) {//每次只允许一个程序在跑
      return;
    }
    //标识程序一开始
    this.startUpFlag = true;
    let page = null;
    try {
      const user = await this.entityManager.findOne(User, {
        where: { id: 1 }
      });
      if (user != null && user.job_cookie != "" && user.job_cookie != null) {
        let tempCookie = user.job_cookie;
        setJobCookie(tempCookie);
        page = await checkLoginStatus('job');
        await delay(500);
        let content = await page.content();
        if (content.indexOf('微信扫码快捷登录') > -1) {
          await JobUtils.login(page);
        }
      } else {
        //开启新页面
        page = await createPage();
        await JobUtils.login(page);
        await this.saveUserInfo(page, user);
      }
      await delay(100);
      let param = JobUtils.buildQueryParams(autoChatDto);
      let tempUrl = "https://we.51job.com/pc/search?" + param;
      const totalPage = await this.obtainTotalPage(page, tempUrl);
      for (let i = 1; i <= totalPage; i++) {
        await page.goto(tempUrl);
        const allJobs = await this.crawlDetailUrl(page, i, totalPage, tempUrl);
        console.log("开始爬取第" + i + "页", allJobs);
        await this.jobProcessor.crawlDetailInfo(page, allJobs, false, true);
      }
    } catch (e) {
      // console.log(e, "程序结束！")
    } finally {
      console.log("程序结束！");
      this.startUpFlag = false;
    }
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
      newUser.job_cookie = cookieText;
      await this.entityManager.save(User, newUser);
    } else {
      user.username = "admin";
      user.password = "admin";
      user.phone = "12345678901";
      user.email = "admin@admin.com";
      user.last_login = "11";
      user.sex = "男";
      user.job_cookie = cookieText;
      await this.entityManager.update(User, { id: user.id }, user);
    }
    return user;
  }


  /**
   * 截取字符串
   */
  async obtainTotalPage(page: any, originUrl: string) {
    await page.goto(originUrl);
    await page.waitForSelector('.joblist');
    await page.waitForSelector('.el-pager');
    //获取总页数
    const totalPage = await page.$eval('.el-pager li:nth-last-child(1)', e => {
      return parseInt(e.textContent)
    });
    if (Number.isNaN(totalPage)) {
      console.log("获取总页数失败")
    }
    return totalPage;
  }

  /**
   * 爬取详情页链接
   */
  async crawlDetailUrl(page: any, currentIndex: number, totalPage: number, originUrl: string) {
    // 移除二维码元素
    await page.evaluate(() => {
      document.querySelectorAll('.qrcode-content').forEach(el => el.remove());
    });
    //前程无忧网站不适合通过页面请求的方式去刷新页面，使用输入内容跳转的方式
    await page.waitForSelector('.joblist');
    await page.waitForSelector('.el-pager');
    // 选择输入框并清空内容
    const inputSelector = '#jump_page';
    await page.waitForSelector(inputSelector);
    await page.focus(inputSelector);
    await page.evaluate((selector) => {
      document.querySelector(selector).value = '';
    }, inputSelector);
    // 重新输入内容
    console.log(currentIndex);
    await page.type(inputSelector, String(currentIndex)); // 输入新内容
    if (currentIndex == 1) {
      await page.goto(originUrl);
    } else {
      await delay(3000);
      await page.click(".jumpPage");
    }
    const allJobs = [];
    const allHrLabelsSet = new Set(); // 用于存储所有唯一的 hrLabels
    if (totalPage > 50) {
      totalPage = 49;
    }
    // for (let i = 1; i <= totalPage; i++) {
    // await page.goto(originUrl + "&pageSize=20&pageNum=" + i);
    //这里拦截响应，获取到响应体，然后进行解析，获取详情页链接
    //定义一个数组
    let jobList = [];
    const eventEmitter = new EventEmitter();
    // 移除之前的事件监听器
    page.removeAllListeners('response');
    let responseCount = 0;
    page.on('response', async response => {
      const url = response.url();
      if (url.includes('https://we.51job.com/api/job/search-pc')) {
        console.log(url);

        try {
          const data = await response.json(); // 假设响应是 JSON 格式
          // console.log('Response data:', data);
          for (const item of data.resultbody.job.items) {
            jobList.push(item);
          }
        } catch (error) {
          console.error('Failed to parse response as JSON:', error);
          try {
            const text = await response.text(); // 如果不是 JSON 格式，获取文本
            console.log('Response text:', text);
          } catch (textError) {
            console.error('Failed to get response text:', textError);
          }
        } finally {
          responseCount++;
          eventEmitter.emit('allResponsesReceived');
          // if (responseCount === totalPage) {
          //     eventEmitter.emit('allResponsesReceived');
          // }
        }
      }
    });
    // 等待所有响应处理完成
    await new Promise(resolve => {
      eventEmitter.once('allResponsesReceived', resolve);
    });
    await page.waitForSelector('.joblist');
    await delay(1000);
    const jobs = await page.$eval('.joblist', (el: { querySelectorAll: (arg0: string) => any; }) => {
      return [...el.querySelectorAll('.joblist-item')].map(item => {
        return {
          company: {
            name: item.querySelector('.cname').textContent,
          },
          job: {
            name: item.querySelector('.jname').textContent,
            area: item.querySelector('.area').textContent,
            salary: item.querySelector('.sal').textContent,
            // tag_list: item.querySelector('.tags').textContent,
            // info_info: item.querySelector('.info-desc').textContent
          },
          // link: item.querySelector('a').href,
        }
      })
    });
    //向jobs中添加jobList相对应下标的数据
    for (let j = 0; j < jobList.length; j++) {
      jobs[j].link = jobList[j].jobHref;
      let hrLabels = jobList[j].hrLabels;

      // 检查 hrLabels 是否为数组，如果不是则初始化为空数组
      if (!Array.isArray(hrLabels)) {
        hrLabels = [];
      }
      // 将 jobList[i].hrLabels 中的每个标签添加到 allHrLabelsSet
      for (const label of hrLabels) {
        allHrLabelsSet.add(label);
      }
    }
    allJobs.push(...jobs);
    // //前程无忧网站不适合通过页面请求的方式去刷新页面，使用输入内容跳转的方式
    // await page.waitForSelector('.joblist');
    // await page.waitForSelector('.el-pager');
    // // 选择输入框并清空内容
    // const inputSelector = '#jump_page';
    // await page.waitForSelector(inputSelector);
    // await page.focus(inputSelector);
    // await page.evaluate((selector) => {
    //   document.querySelector(selector).value = '';
    // }, inputSelector);
    // // 重新输入内容
    // console.log(currentIndex);
    // await page.type(inputSelector, String(currentIndex)); // 输入新内容
    // await page.click(".jumpPage");
    // }
    return allJobs;
  }

  /**
   * 方法三：进入聊天界面，回访打过招呼的岗位
   */
  async revisitAndChat() {
    //获取登录状态
    const page = await checkLoginStatus('job');

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
        page = await checkLoginStatus('job');
        await page.goto(dataList[i]);
        const html = await page.content();
        const title = await page.title();
        console.log(html, title);
        const lastPageNumber = await this.obtainLastPage(page, dataList[i]);
        const allJobs = await this.crawlDetailUrl(page, 1, lastPageNumber, dataList[i].substring(0, dataList[i].length - 6));
        //Crawl web detail page!
        await this.jobProcessor.crawlDetailInfo(page, allJobs, true, false);
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
          await page.click('.soupager__pagebox__goinp');
          await delay(100);
        } catch (e) {
          console.log(e, 'breakpoint testing')
        }
      }
      pageNum += 10;
      //这里获取disabled属性比较特殊，也是获取元素比较通用的方式
      const attributeValue = await page.$eval('.soupager a:nth-last-child(2)', element => element.getAttribute('disabled'));
      await page.waitForSelector('.soupager');
      if (attributeValue == null) {
        try {
          // await attempt(() => {
          //   page.click('.soupager a:nth-last-child(2)').then(() => console.log("click successful!")).catch(() => { console.log('Click failed!') });
          // }, 5); // 尝试5次
        } catch (error) {
          console.error('All attempts failed:', error);
        }
      }
      const href = await page.$eval('.soupager a:nth-last-child(2)', e => {
        return e.href;
      });
      console.log(href, attributeValue);
      if (attributeValue == "disabled") {
        console.log('已到最后一页', href);
        // 使用正则表达式匹配 'p' 后面的数字
        const regex = /p(\d+)/;
        const match = href.match(regex);
        if (match && match[1]) {
          total = match[1];
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
    let page: any = await checkLoginStatus('job');
    positionName = "测试开发"
    await page.goto('https://www.zhaopin.com/sou/jl763/kwDL5ONLAV019T2/p1?we=0305&kt=3');
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
        const urls = await page.$eval('.soupager__index--active', els => {
          return els.href.trim();
        });
        console.log("测试拿到当前页面的url链接" + urls);
      } catch (error) {
        console.log(error);
      }
    }
  }
}