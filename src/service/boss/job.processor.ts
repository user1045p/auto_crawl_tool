import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Page } from 'puppeteer';
import { FileBloomFilter } from '../common/utils/bloom.filter';
import { ElementUtils } from '../common/utils/element.utils';
import { BossUtils } from './boss.utils';
import { ProcessOptions } from './boss.types';
import { BossConfigService } from './boss.config';
import { delay } from '../common/utils/puppeteer.utils';
import { BossEntity } from './boss.entity';
import { sendChatRequest } from '../common/utils/http.util';
import { CacheService } from '../../common/cache.service';
import { CacheData } from '../../entites/cache';
import { EventEmitter } from 'events';


@Injectable()
export class JobProcessor {
  // 创建事件发射器用于通知新职位添加
  public readonly jobAddedEvent = new EventEmitter();

  constructor(
    private entityManager: EntityManager,
    @Inject('BLOOM_FILTER') private bloomFilter: FileBloomFilter,
    private configService: BossConfigService,
    private cacheService: CacheService, // 注入缓存服务
  ) { }

  async processJob(page: Page, options: ProcessOptions) {

    //获取当前页面的url
    const currentUrl = page.url();

    let job: BossEntity = await this.resolveJobDetail(page, currentUrl);
    console.log('当前岗位信息：', job);

    const config = this.configService.getConfig();

    // 1. 检查是否重复职位
    if (await this.isDuplicateJob(currentUrl)) return;

    // 2. 访问职位详情页
    await this.navigateToJobPage(page, job.link);

    // 3. 处理滑块验证
    if (await ElementUtils.exists('.wrap-verify-slider', page)) {
      await delay(10000);
    }

    // 4. 匹配简历和职位
    let matchDegree: string = "";
    if (options.startupAI) {
      matchDegree = await this.matchResumeAndJdDegree("String", job.desc);
    }

    // 5. 保存职位信息
    if (options.saveInfo) {
      job.match_degree = matchDegree;
      job.greeting = "你好，我对这个岗位很感兴趣";
      console.log("保存职位信息", job);
      await this.saveJobInfo(job);
      // 发出职位添加事件
      this.jobAddedEvent.emit('jobAdded', job);
    }

    // 6. 自动打招呼
    if (options.autoChat && await this.shouldChat(page)) {
      await this.chatAndSendMessage(page, config.greetSentence);
    }
  }

  private async resolveJobDetail(page: Page, link: string): Promise<BossEntity> {
    let jobDetail = new BossEntity();
    jobDetail.name = await ElementUtils.getElementContent(page, '.name h1');
    jobDetail.experiece = await ElementUtils.getElementContent(page, '.text-experiece');
    jobDetail.degree = await ElementUtils.getElementContent(page, '.text-degree');
    jobDetail.active = await ElementUtils.getElementContent(page, '.boss-active-time');
    jobDetail.address = await ElementUtils.getElementContent(page, '.location-address');
    jobDetail.welfare = await ElementUtils.getElementContent(page, '.job-tags');
    jobDetail.area = await ElementUtils.getElementContent(page, '.text-city');
    jobDetail.salary = await ElementUtils.getElementContent(page, '.salary');
    jobDetail.link = link;
    jobDetail.tag = await ElementUtils.getElementContent(page, '.job-keyword-list');
    jobDetail.company = await ElementUtils.getElementContent(page, '.boss-info-attr');
    jobDetail.desc = await ElementUtils.getElementContent(page, '.job-sec-text');
    return jobDetail;
  }

  private async isDuplicateJob(link: string): Promise<boolean> {
    const baseUrl = new URL(link).origin + new URL(link).pathname;
    const key = `${baseUrl}-boss`;
    return this.bloomFilter.checkDuplicate(key);
  }

  private async navigateToJobPage(page: Page, url: string) {
    try {
      await page.goto(url, { timeout: 15000, waitUntil: 'domcontentloaded' });
    } catch (error) {
      console.error(`导航到职位页面失败: ${url}`, error);
    }
  }

  private async matchResumeAndJdDegree(resume: string, jodDesc: string): Promise<string | null> {
    //从缓存中获取数据
    let conversationId = '';
    const tempMap = this.cacheService.getFromCache('cache_conversation_id');
    if (tempMap && tempMap.value) {
      conversationId = tempMap.value
    }
    let question = `以下是个人简历
        个人摘要 (Professional Summary)
        经验丰富、结果导向的销售专业人士，拥有 [年数] 年在 [行业， 例如：B2B软件/SaaS、医疗器械、快消品、金融服务、广告媒体等] 领域的成功销售经验。
        在 [关键技能1， 例如：新客户开拓、大客户管理、复杂谈判、渠道销售] 和 [关键技能2， 例如：解决方案销售、关系建立、市场分析] 方面有深厚造诣。
        成功 [量化成就1， 例如：连续3年超额完成销售指标120%以上]， 擅长 [量化成就2， 例如：将客户平均订单价值提升30% / 缩短销售周期25% / 赢单率达到行业领先的XX%]。
        致力于通过理解客户需求并提供卓越价值，驱动可持续的业务增长。寻求在 [目标公司类型] 中担任 [目标职位名称] 角色，贡献我的销售专长和激情。
        以下是岗位要求：`;

    question += jodDesc;
    question += `；帮我判断岗位的匹配度，最后给出个百分百吧的匹配度。只需要百分比即可`;
    const result: Map<string, any> = await sendChatRequest(conversationId, question);
    let id = result.get('conversationId');
    let res = result.get('content')
    if (conversationId == '' && id != '') {
      let cacheData = new CacheData();
      cacheData.key = 'cache_conversation_id';
      cacheData.value = id;
      this.cacheService.saveToDatabase(cacheData);
    }
    if (id.substring(0, 30) != conversationId.substring(0, 30)) {
      this.cacheService.updateInCache('cache_conversation_id', id);
    }
    return res;
  }

  private async shouldChat(page: Page): Promise<boolean> {
    const activeText = await ElementUtils.getText('.boss-active-time', page);
    return BossUtils.callActivityLevel(activeText, this.configService.getConfig().activeLevel);
  }

  private async saveJobInfo(job: BossEntity) {
    await this.entityManager.save(BossEntity, job);
  }

  async chatAndSendMessage(page: Page, message: string) {
    try {
      await ElementUtils.click('.btn-startchat', page);
      await delay(300);

      if (await this.handleDialog(page, message)) return;
      await this.handleChatInput(page, message);

      await this.checkChatLimits(page);
    } catch (error) {
      console.error('打招呼失败:', error);
    }
  }

  private async handleDialog(page: Page, message: string): Promise<boolean> {
    if (await ElementUtils.exists('.dialog-container', page)) {
      const content = await page.content();

      if (content.includes('工作经历不匹配')) {
        console.log('工作经历不匹配，跳过该岗位');
        return true;
      }

      if (await ElementUtils.exists('.input-area', page)) {
        await ElementUtils.type('.input-area', message, page);
        await page.keyboard.press('Enter');
        return true;
      }
    }
    return false;
  }

  private async handleChatInput(page: Page, message: string) {
    if (await ElementUtils.exists('#chat-input', page)) {
      await ElementUtils.type('#chat-input', message, page);
      await page.keyboard.press('Enter');
    }
  }

  private async checkChatLimits(page: Page) {
    if (await ElementUtils.exists('.dialog-container', page)) {
      const content = await page.content();

      if (content.includes('无法进行沟通') ||
        content.includes('今日沟通人数已达上限')) {
        throw new Error('今日沟通数量已达上限');
      }
    }
  }
}