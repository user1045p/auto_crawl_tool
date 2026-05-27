import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Page } from 'puppeteer';
import { FileBloomFilter } from '../common/utils/bloom.filter';
import { ElementUtils } from '../common/utils/element.utils';
import { LiepinUtils } from './liepin.utils';
import { ProcessOptions } from './liepin.types';
import { LiepinConfigService } from './liepin.config';
import { delay } from '../common/utils/puppeteer.utils';
import { LiepinEntity } from './liepin.entity';

@Injectable()
export class JobProcessor {
  constructor(
    private entityManager: EntityManager,
    @Inject('BLOOM_FILTER') private bloomFilter: FileBloomFilter,
    private configService: LiepinConfigService,
  ) { }

  async processJob(page: Page, allJobs: Array<any>, options: ProcessOptions, greetSentence: string) {
    for (let i = 0; i < allJobs.length; i++) {
      //如果遇到整5的，停顿久一点
      if (i % 3 == 0) {
        await delay(Math.floor(Math.random() * 2000) + 1000);
      }

      // 1. 检查是否重复职位
      if (await this.isDuplicateJob(allJobs[i].link)) return;
      console.log(allJobs[i]);
      

      await page.goto(allJobs[i].link, { timeout: 10000 });

      //生成一个随机秒速
      await delay(Math.floor(Math.random() * 2000) + 1000);

      if (options.saveInfo) {
        await page.waitForSelector('.job-intro-container');

        let jd = ''
        if (await ElementUtils.checkElementExitNoDelay('.job-intro-container', page)) {
          jd = await page.$eval('.job-intro-container', (el: { textContent: any; }) => {
            return el.textContent
          });
        }
        allJobs[i].desc = jd;

        await page.waitForSelector('.job-properties');
        let experiece = '';
        if (await ElementUtils.checkElementExitNoDelay('.job-properties', page)) {
          experiece = await page.$eval('.job-properties', (el: { textContent: any; }) => {
            return el.textContent
          });
        }
        allJobs[i].experiece = experiece;

        let degree = '';
        if (await ElementUtils.checkElementExitNoDelay('.job-properties', page)) {
          degree = await page.$eval('.job-properties', (el: { textContent: any; }) => {
            return el.textContent
          });
        }
        allJobs[i].degree = degree;

        let active = ''
        if (await ElementUtils.checkElementExitNoDelay('.online', page)) {
          active = await page.$eval('.online', (el: { textContent: any; }) => {
            return el.textContent
          });
        }
        allJobs[i].active = active;

        let address = ''
        if (await ElementUtils.checkElementExitNoDelay('.job-properties', page)) {
          address = await page.$eval('.job-properties', (el: { textContent: any; }) => {
            return el.textContent
          });
        }
        allJobs[i].address = address;

        await delay(300);

        const job = new LiepinEntity();

        job.name = allJobs[i].job.name;
        job.experiece = allJobs[i].experiece;
        job.degree = allJobs[i].degree;
        job.active = allJobs[i].active;
        job.address = allJobs[i].address;
        job.area = allJobs[i].job.area;
        job.salary = allJobs[i].job.salary;
        job.link = allJobs[i].link;
        job.company = allJobs[i].company['name'];
        job.desc = allJobs[i].desc;
        await this.entityManager.save(LiepinEntity, job);
      }

      if (options.autoChat) {
        //快速滑动
        await page.evaluate(() => {
          window.scrollBy(0, Math.floor(Math.random() * 1000) + 200);
        });
        //缓慢滑动
        await page.evaluate(() => {
          const distance = Math.floor(Math.random() * 1000) + 200; // 滚动的总距离
          const duration = 1000; // 滚动的总时间（毫秒）
          const step = 20; // 每一步滚动的距离
          const steps = Math.ceil(distance / step); // 总步数
          const interval = duration / steps; // 每一步的时间间隔

          let currentStep = 0;
          const scrollInterval = setInterval(() => {
            window.scrollBy(0, step);
            currentStep++;
            if (currentStep >= steps) {
              clearInterval(scrollInterval);
            }
          }, interval);
        });

        //这里进来分为聊一聊，和发简历，业务要前端传过来
        //1、投简历--》点击".btn-minor";判断页面有没有弹窗".ant-modal-content"
        //2、一键发简历--》判断页面有没有弹窗".ant-modal-content"
        //3、继续聊--》点击".btn-main",输入框输入内容".__im_basic__input-content"，点击发送按钮“.ant-btn ant-btn-primary ant-btn-sm __im_basic__basic-send-btn”
        let active = ''
        if (await ElementUtils.checkElementExitNoDelay('.boss-active-time', page)) {
          active = await page.$eval('.boss-active-time', (el: { textContent: any; }) => {
            return el.textContent
          });
        }

        //根据当前活跃状态，然后判断是否需要打招呼
        const config = this.configService.getConfig();
        let flag: boolean = LiepinUtils.callActivityLevel(active, config.activeLevel);
        if (!flag) {
          await delay(300);
          // 自动打招呼
          await this.chatAndSendMeg(page, greetSentence);
        } else {
          console.log('当前岗位不符合打招呼条件');
        }
      }
    }
  }

  private async isDuplicateJob(link: string): Promise<boolean> {
    const baseUrl = new URL(link).origin + new URL(link).pathname;
    const key = `${baseUrl}-liepin`;
    return this.bloomFilter.checkDuplicate(key);
  }

  //需要模拟自动打招呼
  async chatAndSendMeg(page: any, greetSentence: string) {
    //投简历
    if (await ElementUtils.checkElementExitNoDelay('.btn-minor', page)) {
      console.log('可以投简历投简历');
      await page.click('.btn-minor');
      if (await ElementUtils.checkElementExit('#rc_unique_0', page)) {
        console.log('需要确认发送');
        await page.click('.ant-modal-footer button');
      }
      // 等待页面 B 加载完成
      await page.waitForNavigation();
      const curUrl = await page.url();
      const curContent = await page.content();
      if (curUrl.indexOf('https://c.liepin.com/job/apply/success') != -1 || curContent.indexOf('投递成功') != -1) {
        console.log('投递已成功');
        // 退回到原页面
        await page.goBack();
      }
      await delay(Math.floor(Math.random() * 1000) + 200);
    }
    if (await ElementUtils.checkElementExit('.btn-main', page)) {
      console.log('可以聊一聊');
      await page.click('.btn-main');
      await delay(800);
      //这里需要循环，如果迟迟没有弹窗，重试
      while (!await ElementUtils.checkElementExit('#im-chatwin', page)) {
        await page.click('.btn-main');
        console.log("正在重试中...");
        await delay(200);
      }
      if (await ElementUtils.checkElementExit('#im-chatwin', page) && await ElementUtils.checkElementExit('.ant-input', page)) {
        await page.waitForSelector('.ant-input');
        await page.focus('.ant-input')
        await page.type('.ant-input', greetSentence, { delay: 100 }); // 输入变慢，像一个用户
        await delay(300);
        await page.keyboard.press('Enter');
        await delay(300);
      }
    }
    await delay(100);
  }
}