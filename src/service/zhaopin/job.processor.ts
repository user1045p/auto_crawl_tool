import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Page } from 'puppeteer';
import { FileBloomFilter } from '../common/utils/bloom.filter';
import { ZhaopinUtils } from './zhaopin.utils';
import { ProcessOptions } from './zhaopin.types';
import { ZhaopinConfigService } from './zhaopin.config';
import { delay } from '../common/utils/puppeteer.utils';
import { JobDetail } from '../../entites/JobDetail';
import { CacheService } from '../../common/cache.service';
import { checkElementExitNoDelay } from '../../utils/common.util';

@Injectable()
export class ZhaopinJobProcessor {
  constructor(
    private entityManager: EntityManager,
    @Inject('BLOOM_FILTER') private bloomFilter: FileBloomFilter,
    private configService: ZhaopinConfigService,
    private cacheService: CacheService,
  ) { }

  async processJob(page: Page, job: JobDetail, options: ProcessOptions) {
    try {
      //获取当前页面的url
      const currentUrl = job.detail_link;

      const config = this.configService.getConfig();

      // 1. 检查是否重复职位
      if (await this.isDuplicateJob(currentUrl)) return;

      // 2. 访问职位详情页并提取信息
      const jobDetail = await ZhaopinUtils.crawlJobDetail(page, job);

      // 3. 保存职位信息
      if (options.saveInfo) {
        await this.saveJobInfo(jobDetail);
      }

      // 4. 自动打招呼
      if (options.autoChat) {
        await this.chatAndSendMessage(page, config.greetSentence);
      }
    } catch (e) {
      //只中断当前进程
      throw new Error();
    }
  }

  private async isDuplicateJob(link: string): Promise<boolean> {
    const baseUrl = new URL(link).origin + new URL(link).pathname;
    const key = `${baseUrl}-zhaopin`;
    return this.bloomFilter.checkDuplicate(key);
  }

  private async saveJobInfo(job: JobDetail) {
    await this.entityManager.save(JobDetail, job);
  }

  async chatAndSendMessage(page: Page, message: string) {
    try {
      await delay(800);
      //模拟点击立即沟通
      await page.click('.summary-plane__action');
      if (await checkElementExitNoDelay('.a-job-apply-workflow', page) || await checkElementExitNoDelay('.a-modal__content', page)) {
        const content = await page.content();
        if (content.indexOf("太贪心啦") > -1 || content.indexOf("今日投递已达到上限！") > -1) {
          console.log("今日投递已达到上限！");
          throw new Error("今日投递已达到上限！");
        }
      }
      //这里需要判断是否有新的窗口打开，暂时先不做了
      await delay(800);
      console.log("岗位投递完成！");
    } catch (error) {
      console.error('打招呼失败:', error);
    }
  }
}