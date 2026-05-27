import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from '../entites/User';
import { attempt, login, buildQueryParams } from '../utils/job.util';
import { checkLoginStatu, getBaseUrl,createPage, delay, checkElementExit, generateMD5, isDuplicateJob, readCookie, checkElementExitNoDelay } from '../utils/common.util';
import { AutoChatDto } from 'src/entites/dto/AutoChatDto';
import { EventEmitter } from 'events';
import { Job } from 'src/entites/Job';

const StealthPlugin = require('puppeteer-extra-plugin-stealth');

@Injectable()
export class JobService {

    //标识程序是否在运行中
    public startUpFlag: boolean = false;
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
                readCookie(tempCookie, "job");
                page = await checkLoginStatu('job');
                await delay(500);
                let content = await page.content();
                if (content.indexOf('微信扫码快捷登录') > -1) {
                    await login(page);
                }
            } else {
                //开启新页面
                page = await createPage();
                await login(page);
            }
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
            await delay(100);
            let param = buildQueryParams(autoChatDto);
            let tempUrl = "https://we.51job.com/pc/search?" + param;
            await page.goto(tempUrl);
            const totalPage = await this.obtainTotalPage(page, tempUrl);
            const allJobs = await this.crawlDetailUrl(page, totalPage, tempUrl);
            await this.crawlDetailInfo(page, allJobs, false, true);
        } catch (e) {
            // console.log(e, "程序结束！")
        } finally {
            console.log("程序结束！");
            this.startUpFlag = false;
        }
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
    async crawlDetailUrl(page: any, totalPage: number, originUrl: string) {
        await page.goto(originUrl);
        const allJobs = [];
        const allHrLabelsSet = new Set(); // 用于存储所有唯一的 hrLabels
        if (totalPage > 50) {
            totalPage = 49;
        }
        for (let i = 1; i <= totalPage; i++) {
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
            //  '1天内处理简历',
            //   '今日回复8次',
            //   '今日回复5次',
            //   '1分钟前处理简历',
            //   '喜欢聊天',
            //   '简历处理快',
            //   '今日回复4次',
            //   '4分钟前处理简历',
            //   '回复率高',
            //   '今日回复3次'
            allJobs.push(...jobs);
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
            await page.type(inputSelector, String(i + 1)); // 输入新内容
            await page.click(".jumpPage");
        }
        return allJobs;
    }


    /**
     * 访问岗位详情页
     * @param page 
     * @param allJobs 工作信息列表
     * @param isCrawlInfo 是否保存数据
     * @param isAutoChat 是否自动打招呼
     */
    async crawlDetailInfo(page: any, allJobs: Array<Job>, isCrawlInfo: boolean, isAutoChat: boolean) {
        let error = 0;
        let errorList = [];
        for (let i = 0; i < allJobs.length; i++) {
            try {
                // ===========使用布隆过滤器过滤重复岗位(根据URL来判断，更准确)===============
                let tempURL=getBaseUrl(allJobs[i].link);
                const beforeKey = `${tempURL}-job`;
                const beforeKeyHash = generateMD5(beforeKey); // 生成MD5摘要
                const isBeforeDuplicate = await isDuplicateJob(beforeKeyHash);
                if (isBeforeDuplicate) {
                    console.log(`此岗位已经投递过`);
                    await delay(Math.floor(Math.random() * 1000) + 100);
                    continue;
                }
                // =====================使用布隆过滤器过滤重复岗位===========================
                await page.goto(allJobs[i].link, { timeout: 10000 });
                await delay(1000);
                //这里是进入需要验证
                if (await checkElementExitNoDelay('.nc-lang-cnt', page)) {
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
                // ===========使用布隆过滤器过滤重复岗位===============
                // const jobKey = `${allJobs[i].company}-${allJobs[i].job.name}-${allJobs[i].job.area}-${allJobs[i].job.salary}-job`;
                // const jobKeyHash = generateMD5(jobKey); // 生成MD5摘要
                // const isDuplicate = await isDuplicateJob(jobKeyHash);
                // if (isDuplicate) {
                //     console.log(`此岗位已经投递过`);
                //     await delay(Math.floor(Math.random() * 2000) + 1000);
                //     continue;
                // }
                // ===========使用布隆过滤器过滤重复岗位===============
                if (isCrawlInfo) {
                    await page.waitForSelector('.job-sec-text');

                    let jd = ''
                    if (await checkElementExitNoDelay('.job-sec-text', page)) {
                        jd = await page.$eval('.job-sec-text', (el: { textContent: any; }) => {
                            return el.textContent
                        });
                    }
                    allJobs[i].desc = jd;
                    await page.waitForSelector('.job-banner');
                    let experiece = '';
                    if (await checkElementExitNoDelay('.text-experiece', page)) {
                        experiece = await page.$eval('.text-experiece', (el: { textContent: any; }) => {
                            return el.textContent
                        });
                    }
                    allJobs[i].experiece = experiece;

                    let degree = '';
                    if (await checkElementExitNoDelay('.text-degree', page)) {
                        degree = await page.$eval('.text-degree', (el: { textContent: any; }) => {
                            return el.textContent
                        });
                    }
                    allJobs[i].degree = degree;

                    let active = ''
                    if (await checkElementExitNoDelay('.boss-active-time', page)) {
                        active = await page.$eval('.boss-active-time', (el: { textContent: any; }) => {
                            return el.textContent
                        });
                    }
                    allJobs[i].active = active;

                    let address = ''
                    if (await checkElementExitNoDelay('.location-address', page)) {
                        address = await page.$eval('.location-address', (el: { textContent: any; }) => {
                            return el.textContent
                        });
                    }
                    allJobs[i].address = address;

                    await delay(200);
                    const job = new Job();

                    job.name = allJobs[i].job.name;
                    job.experiece = allJobs[i].experiece;
                    job.degree = allJobs[i].degree;
                    job.active = allJobs[i].active;
                    job.address = allJobs[i].address;
                    job.info_desc = allJobs[i].job.info_info;
                    job.area = allJobs[i].job.area;
                    job.salary = allJobs[i].job.salary;
                    job.link = allJobs[i].link;
                    job.company = allJobs[i].company['name'];
                    job.desc = allJobs[i].desc;
                    await this.entityManager.save(Job, job);
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

    //需要模拟自动打招呼
    async chatAndSendMeg(page: any) {
        console.log("投递岗位");
        await delay(800);
        //模拟点击立即沟通
        await page.click('#app_ck');
        //等待弹窗出现--不设置打招呼语，不会出现弹窗了
        await delay(500);
        if(await checkElementExitNoDelay('#deliveryExpireLayer', page)){
            throw new Error('今日投递完成');
        }
        let curUrl = await page.url();
        if (curUrl.indexOf('https://jobs.51job.com/applysuccess.php') > -1 || await checkElementExitNoDelay('.j_success', page)) {
            console.log("岗位投递完成！");
        } else {
            try {
                console.log("没有弹窗");
            } catch (e) {
                console.log(e, 'breakpoint testing')
            }
        }
    }

    /**
     * 方法三：进入聊天界面，回访打过招呼的岗位
     */
    async revisitAndChat() {
        //获取登录状态
        const page = await checkLoginStatu('zhaopin');

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
                page = await checkLoginStatu('zhaopin');
                await page.goto(dataList[i]);
                const html = await page.content();
                const title = await page.title();
                console.log(html, title);
                const lastPageNumber = await this.obtainLastPage(page, dataList[i]);
                const allJobs = await this.crawlDetailUrl(page, lastPageNumber, dataList[i].substring(0, dataList[i].length - 6));
                //Crawl web detail page!
                await this.crawlDetailInfo(page, allJobs, true, false);
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
            if (await checkElementExit('.soupager__pagebox__goinp', page)) {
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
            const attributeValue = await page.$eval('.soupager a:nth-last-child(2)', element => element.getAttribute('disabled'));
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
        let page: any = await checkLoginStatu('zhaopin');
        positionName = "测试开发"
        await page.goto('https://www.zhaopin.com/sou/jl763/kwDL5ONLAV019T2/p1?we=0305&kt=3');
        //模拟点击搜索
        if (await checkElementExit('.query-search__content-input', page)) {
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


    @Inject(EntityManager)
    private entityManager: EntityManager;
}

