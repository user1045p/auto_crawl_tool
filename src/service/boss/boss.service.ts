import { Injectable, OnModuleInit } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Page } from 'puppeteer';
import { BossConfigService } from './boss.config';
import { JobProcessor } from './job.processor';
import { DataService } from './data.service';
import { User } from '../../entites/User';
import { BossEntity } from './boss.entity';
import { QueryParamDto } from './boss.types';
import { BossUtils } from './boss.utils';
import { BrowserSession } from './boss.types';
import { checkLoginStatus,checkLoginStatusByBoss,createPage,createPageByBoss, getCookiesAsText, scrollPage, delay } from '../common/utils/puppeteer.utils';
import { setBossCookie } from '../common/config/puppeteer.config';
import { Logger } from '../../logger/logger';
import { AutoChatDto } from '../../entites/dto/AutoChatDto';
import { Observable, Subject } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable()
export class BossService implements OnModuleInit {
  // 添加一个Subject用于推送新数据
  private jobAddedSubject = new Subject<BossEntity>();
  
  // 提供一个Observable供外部订阅
  public readonly jobAdded$ = this.jobAddedSubject.asObservable();
  
  // 公开JobProcessor的事件发射器
  public get jobAddedEvent(): EventEmitter {
    return this.jobProcessor.jobAddedEvent;
  }

  constructor(
    private entityManager: EntityManager,
    private configService: BossConfigService,
    private jobProcessor: JobProcessor,
    private dataService: DataService
  ) { }

  // 在模块初始化时订阅JobProcessor的事件
  async onModuleInit() {
    this.jobProcessor.jobAddedEvent.on('jobAdded', (job: BossEntity) => {
      this.jobAddedSubject.next(job);
    });
  }

  async startAutoChat(autoChatDto: AutoChatDto) {
    // 检查是否已有任务运行
    if (this.configService.getConfig().isRunning) {
      throw new Error('已有任务运行中');
    }
    //转换参数，把入参转换为queryParamDto
    const queryParamDto: QueryParamDto = BossUtils.toQueryParamDto(autoChatDto);
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
    let user = await this.entityManager.findOne(User, { where: { id: 1 } });
    let page: Page;
    // 重置cookie如果需要
    if (dto.exitAccount === 'true' || dto.phone) {
      user.boss_cookie = '';
    }
    // 复用已有会话或创建新会话
    if (user?.boss_cookie) {
      setBossCookie(user.boss_cookie)
      page = await this.resumeSession(user);
    } else {
      page = await createPageByBoss();
      await BossUtils.login(page);
      user = await this.saveUserInfo(page, user);
    }
    return { page, user };
  }

  private async resumeSession(user: User): Promise<Page> {
    const page = await checkLoginStatusByBoss('boss');
    const content = await page.content();
    if (content.includes('当前登录状态已失效')) {
      Logger.error('会话已失效，请重新登录');
      await BossUtils.login(page);
      await this.saveUserInfo(page, user);
    }
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
    const params = BossUtils.buildQueryParams(dto);
    const baseUrl = `https://www.zhipin.com/web/geek/job?${params}`;
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
  private async getJobListAndHandle(page: Page, url: string): Promise<number> {
    await page.goto(url);
    //定义采集的标签（后续考虑可以把这个持久化，可以精准的获取运行下标）
    let currentIndex = 0;
    while (true) {
      await delay(3000 + Math.random() * 1000);
      await page.waitForSelector('.job-list-container', { timeout: 10000 });
      //滑动页面
      await scrollPage(page, {
        minDistance: 300,
        maxDistance: 800,
        times: 3,
        waitAfterScroll: 100
      });
      // 获取当前页面总标签数
      const jobCount = await page.$$eval('.rec-job-list div.card-area div.job-card-wrap', elements => elements.length);
      for (let i = currentIndex; i < jobCount; i++) {
        const elements = await page.$$('.rec-job-list div.card-area div.job-card-wrap');
        await elements[i].click();
        await delay(500 + Math.random() * 1000);
        //点击详情
        const detailButton = await page.$('.more-job-btn');
        detailButton.click();
        // 等待新页面打开
        const newPagePromise = new Promise<Page>(resolve => {
          page.browser().on('targetcreated', async (target) => {
            if (target.type() === 'page') {
              const newPage = await target.page();
              resolve(newPage);
            }
          });
        });
        const newPage = await newPagePromise;
        this.processJob(newPage);
        currentIndex++;
        if (currentIndex % 5 == 0) {
          await delay(8000 + Math.random() * 500);
        }
      }
    }
  }

  private async processJob(page: Page) {
    try {
      // 在新页面上执行滚动操作
      await scrollPage(page, {
        minDistance: 300,
        maxDistance: 800,
        times: 1,
        waitAfterScroll: 100
      });
      await this.jobProcessor.processJob(page, {
        saveInfo: true,//是否保存信息
        autoChat: true,  //是否自动聊天
        startupAI: false //是否启动AI
      });
      await delay(1000 + Math.random() * 500); // 随机延迟
      //关闭当前页面
      await page.close();
    } catch (error) {
      console.error(`处理职位失败`, error);
    }
  }

  private async saveUserSession(session: BrowserSession) {
    if (!session.user) return;
    const cookies = await getCookiesAsText(session.page);
    session.user.boss_cookie = cookies;
    await this.entityManager.save(User, session.user);
  }

  private handleError(error: Error) {
    console.error('BOSS服务错误:', error.message);
    if (error.message.includes('沟通人数已达上限')) {
      // 发送通知或记录日志
    }
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
      newUser.boss_cookie = cookieText;
      await this.entityManager.save(User, newUser);
    } else {
      user.boss_cookie = cookieText;
      await this.entityManager.update(User, { id: user.id }, user);
    }
    return user;
  }

  // 查询BossEntity所有历史记录的方法
  public async findAllHistory(query: any) {
    const queryBuilder = this.entityManager.createQueryBuilder(BossEntity, 'bossEntity');

    // 条件查询
    if (query.position) {
      queryBuilder.andWhere('bossEntity.position LIKE :position', { position: `%${query.position}%` });
    }

    if (query.company) {
      queryBuilder.andWhere('bossEntity.company LIKE :company', { company: `%${query.company}%` });
    }

    if (query.status) {
      queryBuilder.andWhere('bossEntity.status = :status', { status: query.status });
    }

    // 分页
    const currentPage = Math.max(query.page, 1);
    const currentPageSize = Math.max(query.pageSize, 1);
    queryBuilder.skip((currentPage - 1) * currentPageSize).take(currentPageSize);

    // 排序
    queryBuilder.orderBy('bossEntity.create_time', 'DESC');

    const [historyList, totalCount] = await queryBuilder.getManyAndCount();

    return {
      list: historyList,
      total: totalCount,
      page: currentPage,
      pageSize: currentPageSize,
    };
  }
  
  // 当有新职位保存时，调用此方法通知监听者
  public notifyJobAdded(job: BossEntity) {
    this.jobAddedSubject.next(job);
  }
}