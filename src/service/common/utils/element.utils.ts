import { Page } from 'puppeteer';

export class ElementUtils {
  static async exists(selector: string, page: Page, timeout = 3000): Promise<boolean> {
    try {
      await page.waitForSelector(selector, { timeout });
      return true;
    } catch {
      return false;
    }
  }

  static async getText(selector: string, page: Page): Promise<string> {
    if (await this.exists(selector, page, 1000)) {
      return page.$eval(selector, el => el.textContent?.trim() || '');
    }
    return '';
  }

  static async click(selector: string, page: Page) {
    if (await this.exists(selector, page)) {
      await page.click(selector);
    }
  }

  static async type(selector: string, text: string, page: Page) {
    if (await this.exists(selector, page)) {
      await page.focus(selector);
      await page.keyboard.type(text, { delay: 50 });
    }
  }

  // 检查元素是否存在，并执行$eval(旧方法)
  static async checkElementExitNoDelay(element: string, page: any) {
    let Flag = false;
    const promise = page.waitForSelector(element);
    await this.waitForPromise(promise, 500).then(data => {
      Flag = true;
    }).catch(error => {
      Flag = false;
    }).finally(
      () => {
        // console.log('check successful!!');
      }
    );
    const elementExists = await page.evaluate((selector: any) => {
      return document.querySelector(selector) !== null;
    }, element);
    return elementExists && Flag;
  }

  // 检查元素是否存在，并执行$eval(确保有内容才返回，延时比较高，推荐使用)
  static async checkElementExit(element: string, page: any): Promise<boolean> {
    let Flag = false;
    let elementExists = false;
    for (let i = 0; i < 2; i++) { // 尝试5次
      try {
        const promise = await page.waitForSelector(element);
        await ElementUtils.waitForPromise(promise, 200).then(data => {
          Flag = true;
        }).catch(error => {
          Flag = false;
        }).finally(
          () => {
            // console.log('check successful!!');
          }
        );
        elementExists = await page.evaluate((selector: any) => {
          return document.querySelector(selector) !== null;
        }, element);
        if (Flag && elementExists) {
          break;
        } else {
          await new Promise((resolve) => setTimeout(resolve, 200)); // 等待 3 秒
          console.log('The ' + i + ' attempt to obtain content.And the element is ' + element);
          continue;
        } // 如果获取到内容，跳出循环
      } catch (error) {
        console.error(`The` + element + ` content Attempt obtain failed:`, error);
        await new Promise((resolve) => setTimeout(resolve, 200)); // 等待 3 秒// 等待1秒后重试
      }
    }
    if (!(elementExists && Flag)) {
      console.log('Failed to check the content exit or not.')
    }
    await ElementUtils.delay(200); // 等待0.2秒钟
    return elementExists && Flag;
  }

  /**
   * 暂停方法
   * @param time 单位毫秒
   * @returns 
   */
  static async delay(time: any) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time)
    });
  }


  static async waitForPromise(promise: any, timeout: number) {
    // 创建一个在指定时间后 reject 的 Promise
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Timeout')), timeout);
    });
    // 使用 Promise.race 来确定哪个 Promise 先完成
    return Promise.race([promise, timeoutPromise]);
  }

  static async getElementContent(page: Page, element: string): Promise<string | null> {
    let contentText = ''
    try {
      if (await this.checkElementExitNoDelay(element, page)) {
        contentText = await page.$eval(element, (el: { textContent: any; }) => {
          return el.textContent.trim().replace(/\s+/g, '、').replace(/\n/g, '、');
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      return contentText;
    }
  }
}