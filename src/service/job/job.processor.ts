import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { FileBloomFilter } from '../common/utils/bloom.filter';
import { ElementUtils } from '../common/utils/element.utils';
import { JobConfigService } from './job.config';
import { delay } from '../common/utils/puppeteer.utils'
import { generateMD5 } from '../../utils/common.util';
import { getBaseUrl } from '../../utils/common.util';
import {JobEntity} from './job.entity';

@Injectable()
export class JobProcessor {
  constructor(
    private entityManager: EntityManager,
    @Inject('BLOOM_FILTER') private bloomFilter: FileBloomFilter,
    private configService: JobConfigService,
  ) { }

  async crawlDetailInfo(page: any, allJobs: Array<any>, isCrawlInfo: boolean, isAutoChat: boolean) {
    let error = 0;
    let errorList = [];
    for (let i = 0; i < allJobs.length; i++) {
      try {
        // ===========使用布隆过滤器过滤重复岗位(根据URL来判断，更准确)===============
        let tempURL = getBaseUrl(allJobs[i].link);
        const beforeKey = `${tempURL}-job`;
        const beforeKeyHash = generateMD5(beforeKey); // 生成MD5摘要
        const isBeforeDuplicate = await this.isDuplicateJob(beforeKeyHash);
        if (isBeforeDuplicate) {
          console.log(`此岗位已经投递过`);
          await delay(Math.floor(Math.random() * 1000) + 100);
          continue;
        }
        // =====================使用布隆过滤器过滤重复岗位===========================
        await page.goto(allJobs[i].link, { timeout: 10000 });
        await delay(1000);
        //这里是进入需要验证
        if (await ElementUtils.checkElementExitNoDelay('.nc-lang-cnt', page)) {
          // 注入代码，监听鼠标事件并输出日志
          await page.evaluate(() => {
            document.addEventListener('mousedown', () => {
              console.log('鼠标按下');
            });
            document.addEventListener('mouseup', () => {
              console.log('鼠标松开');
            });
          });
          console.log("进入验证页面");
          // 等待滑块元素加载
          await page.waitForSelector('#nc_1_n1z');
          // 获取滑块和滑轨元素
          const slider = await page.$('#nc_1_n1z');
          const sliderContainer = await page.$('.nc-lang-cnt');
          // 获取滑块初始位置
          const sliderBoundingBox = await slider.boundingBox();
          // console.log("滑块坐标：",sliderBoundingBox.x, sliderBoundingBox.y);
          // console.log("滑块长宽：",sliderBoundingBox.width, sliderBoundingBox.height);
          // 获取滑轨宽度
          const sliderContainerBoundingBox = await sliderContainer.boundingBox();
          // console.log("轨迹坐标：",sliderContainerBoundingBox.x, sliderContainerBoundingBox.y);
          // console.log("轨迹长宽：",sliderContainerBoundingBox.width, sliderContainerBoundingBox.height);
          const sliderWidth = sliderContainerBoundingBox.width;
          // 模拟拖动操作
          await delay(Math.floor(Math.random() * 2000) + 1000);
          await page.mouse.move(sliderBoundingBox.x + sliderBoundingBox.width / 2, sliderBoundingBox.y + sliderBoundingBox.height / 2);
          await page.mouse.down();
          await page.mouse.move(sliderBoundingBox.x + sliderWidth, sliderBoundingBox.y + sliderBoundingBox.height / 2, { steps: 50 });
          await delay(Math.floor(Math.random() * 2000) + 1000);
          await page.mouse.up();
          console.log("验证完成");
        }
        if (isCrawlInfo) {
          await page.waitForSelector('.job_msg');

          let jd = ''
          if (await ElementUtils.checkElementExitNoDelay('.job_msg', page)) {
            jd = await page.$eval('.job_msg', (el: { textContent: any; }) => {
              return el.textContent
            });
          }
          allJobs[i].desc = jd;
          await page.waitForSelector('.ltype');
          let experiece = '';
          if (await ElementUtils.checkElementExitNoDelay('.ltype', page)) {
            experiece = await page.$eval('.ltype', (el: { textContent: any; }) => {
              return el.textContent
            });
          }
          allJobs[i].experiece = experiece;
          let degree = '';
          if (await ElementUtils.checkElementExitNoDelay('.ltype', page)) {
            degree = await page.$eval('.ltype', (el: { textContent: any; }) => {
              return el.textContent
            });
          }
          allJobs[i].degree = degree;

          let active = ''
          if (await ElementUtils.checkElementExitNoDelay('.jtag', page)) {
            active = await page.$eval('.jtag', (el: { textContent: any; }) => {
              return el.textContent
            });
          }
          allJobs[i].active = active;
          let address = ''
          if (await ElementUtils.checkElementExitNoDelay('.fp', page)) {
            address = await page.$eval('.fp', (el: { textContent: any; }) => {
              return el.textContent
            });
          }
          allJobs[i].address = address;

          await delay(200);
          const job = new JobEntity();

          job.name = allJobs[i].job.name;
          job.experiece = allJobs[i].experiece;
          job.degree = allJobs[i].degree;
          job.active = allJobs[i].active;
          job.address = allJobs[i].address;
          job.info_desc = allJobs[i].job.desc;
          job.area = allJobs[i].job.area;
          job.salary = allJobs[i].job.salary;
          job.link = allJobs[i].link;
          job.company = allJobs[i].company['name'];
          job.desc = allJobs[i].desc;

          await this.entityManager.save(JobEntity, job);
        }
        if (isAutoChat) {
          // 自动打招呼
          await this.chatAndSendMeg(page);
        }
      } catch (e) {
        error += 1;
        errorList = errorList.concat(allJobs[i].link);
      }
    }
  }

  async chatAndSendMeg(page: any) {
    console.log("投递岗位");
    await delay(800);
    //模拟点击立即沟通
    await page.click('#app_ck');
    //等待弹窗出现--不设置打招呼语，不会出现弹窗了
    await delay(500);
    if (await ElementUtils.checkElementExitNoDelay('#deliveryExpireLayer', page)) {
      throw new Error('今日投递完成');
    }
    let curUrl = await page.url();
    if (curUrl.indexOf('https://jobs.51job.com/applysuccess.php') > -1 || await ElementUtils.checkElementExitNoDelay('.j_success', page)) {
      console.log("岗位投递完成！");
    } else {
      try {
        console.log("没有弹窗");
      } catch (e) {
        console.log(e, 'breakpoint testing')
      }
    }
  }

  private async isDuplicateJob(hash: string): Promise<boolean> {
    return this.bloomFilter.checkDuplicate(hash);
  }
}