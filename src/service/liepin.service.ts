import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Job } from '../entites/Job';
import { User } from '../entites/User';
import { login, callActivityLevel,buildQueryParams,checkLoginStatueError } from '../utils/liepin.util';
import { generateMD5,createPage,getBaseUrl, isDuplicateJob, checkElementExit, checkElementExitNoDelay, checkLoginStatu, delay, obtainContentByFile, readCookie } from '../utils/common.util';
import { AutoChatDto } from 'src/entites/dto/AutoChatDto';

// const StealthPlugin = require('puppeteer-extra-plugin-stealth');

@Injectable()
export class LiepinService {

    //防止方法之间传递变量过深，定义了这个公共变量
    public greetSentence: string = 'Hello,Is this job still available?Look forward to your reply.';

    //岗位活跃程度(默认本周活跃)
    //刚刚活跃（0）<今日活跃（1）<3日内活跃（2）<本周活跃（3）<2周内活跃<本月活跃<2月内活跃<3月内活跃<4月内活跃<5月内活跃<近半年活跃<半年前活跃<其他
    public activeLevel: number = 3;

    //标识程序是否在运行中
    public startUpFlag: boolean = false;

    /**
     * 测试是否能连通
     * @returns 
     */
    getHello(): string {
        return 'Hello World!';
    }

    /**
     * 启动自动打招呼
     */
    async startAutoChat(autoChatDto: AutoChatDto) {

        if (this.startUpFlag) {//每次只允许一个程序在跑
            return;
        }
        //标识程序一开始
        this.startUpFlag = true;
        //给打招呼语句赋值
        if (autoChatDto.greeting != "") {
            this.greetSentence = autoChatDto.greeting + '\n';
        }
        if (autoChatDto.active != null) {
            this.activeLevel = autoChatDto.active;
        }
        let page = null;
        try {
            if (autoChatDto.cookie == '') {
                const user = await this.entityManager.findOne(User, {
                    where: { id: 1 }
                });
                if (user != null && user.liepin_cookie != null && user.liepin_cookie != "") {
                    let tempCookie = user.liepin_cookie;
                    readCookie(tempCookie, "liepin");
                    page = await checkLoginStatu('liepin');
                    await delay(200);
                    let url = await page.url();
                    let content = await page.content();
                    if (content.indexOf('登录/注册') > -1 || url.indexOf('https://www.liepin.com/?loginBackUrl') > -1) {
                        await login(page);
                    }
                } else {
                    //开启新页面
                    page =await createPage();
                    await login(page);
                }
                // 获取所有cookie,并保存起来，方便下次免登录使用
                const client = await page.target().createCDPSession();
                const cookieArr = await client.send('Network.getAllCookies');
                // console.log("获取cookie的内容", cookieArr); 
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
                    user.username = "admin";
                    user.password = "admin";
                    user.phone = "12345678901";
                    user.email = "admin@admin.com";
                    user.last_login = "11";
                    user.sex = "男";
                    user.liepin_cookie = cookieText;
                    await this.entityManager.update(User, { id: user.id }, user);
                }
            } else {
                readCookie(autoChatDto.cookie, "liepin");
                page = await checkLoginStatu('liepin');
                //不知道为啥，需要跳转一下聊天界面，才能保存cookie在浏览器
                await page.goto('https://www.zhipin.com/web/geek/chat');
                await delay(200);
                // 获取所有cookie,并保存起来，方便下次使用
                const client = await page.target().createCDPSession();
                const cookieArr = await client.send('Network.getAllCookies');
                let cookies = cookieArr.cookies;
                let cookieText = '';
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    cookieText += cookie.name + '=' + cookie.value + (i < cookies.length - 1 ? '; ' : '');
                }
                console.log("获取cookie的内容", cookieText);
                const user = new User();
                user.username = "admin";
                user.password = "admin";
                user.phone = "12345678901";
                user.email = "admin@admin.com";
                user.last_login = "11";
                user.sex = "男";
                user.liepin_cookie = cookieText;
                await this.entityManager.save(User, user);
            }
            await delay(100);
            let lastParam=await buildQueryParams(autoChatDto);
            let originUrl = "https://www.liepin.com/zhaopin/?"+lastParam;
            await checkLoginStatueError(page);
            const totalPage = Number(await this.obtainTotalPage(page, originUrl));
            for(let i = 1; i <= totalPage; i++){
                const allJobs = await this.crawlDetailUrl(page, i, originUrl);
                await this.crawlDetailInfo(page, allJobs, false, true);
            }
        } catch (e) {
            this.startUpFlag = false;
            console.log("程序结束")
        }
    }

    /**
     * 截取字符串
     */
    async obtainTotalPage(page: any, originUrl: string) {
        await page.goto(originUrl);
        await page.waitForSelector('.job-list-box');
        await page.waitForSelector('.list-pagination-box');
        //获取总页数
        const totalPage = await page.$eval('.ant-pagination li:nth-last-child(2)', (e: { textContent: string; }) => {
            return parseInt(e.textContent)
        });
        return totalPage;
    }

    /**
     * 爬取详情页链接
     */
    async crawlDetailUrl(page: any, pageNum: number, originUrl: string) {
        await checkLoginStatueError(page);
        const allJobs = [];
        // for (let i = 1; i <= totalPage; i++) {
            await delay(Math.floor(Math.random() * 2000) + 1000);

            await page.goto(originUrl + '&currentPage=' + (pageNum - 1));

            await page.waitForSelector('.job-list-box');

            const jobs = await page.$eval('.job-list-box', (el: { querySelectorAll: (arg0: string) => any; }) => {
                return [...el.querySelectorAll('.job-card-pc-container')].map(item => {
                    return {
                        company: {
                            name: item.querySelector('.company-name').textContent,
                        },
                        job: {
                            name: item.querySelector('.job-title-box').textContent,
                            area: item.querySelector('.job-dq-box').textContent,
                            salary: item.querySelector('.job-salary').textContent,
                            // tag_list: item.querySelector('.tag-list').textContent,
                            // info_info: item.querySelector('.info-desc').textContent
                        },
                        link: item.querySelector('a').href,
                    }
                })
            });
            // console.log(jobs);
            allJobs.push(...jobs);
        // }
        console.log(allJobs.length);
        return allJobs;
    }

    /**
     * 访问详情页
     * @param page 
     * @param allJobs 工作信息列表 
     * @param isCrawlInfo 是否保存数据
     * @param isAutoChat 是否自动打招呼
     */
    async crawlDetailInfo(page: any, allJobs: Array<Job>, isCrawlInfo: boolean, isAutoChat: boolean) {
        for (let i = 0; i < allJobs.length; i++) {
            await checkLoginStatueError(page);
            //如果遇到整5的，停顿久一点
            if (i % 3 == 0) {
                await delay(Math.floor(Math.random() * 5000) + 1000);
            }
            // ===========使用布隆过滤器过滤重复岗位(根据URL来判断，更准确)===============
            let tempURL=getBaseUrl(allJobs[i].link);
            const beforeKey = `${tempURL}-liepin`;
            const beforeKeyHash = generateMD5(beforeKey); // 生成MD5摘要
            const isBeforeDuplicate = await isDuplicateJob(beforeKeyHash);
            if (isBeforeDuplicate) {
                console.log(`此岗位已经投递过`);
                await delay(Math.floor(Math.random() * 1000) + 100);
                continue;
            }
            // =====================使用布隆过滤器过滤重复岗位===========================
            await page.goto(allJobs[i].link, { timeout: 10000 });
            // =================使用布隆过滤器过滤重复岗位=========================
            // const jobKey = `${allJobs[i].company}-${allJobs[i].job.name}-${allJobs[i].job.area}-${allJobs[i].job.salary}-liepin`;
            // const jobKeyHash = generateMD5(jobKey); // 生成MD5摘要
            // const isDuplicate = await isDuplicateJob(jobKeyHash);
            // if (isDuplicate) {
            //     console.log(`此岗位已经投递过`);
            //     await delay(Math.floor(Math.random() * 2000) + 1000);
            //     continue;
            // }
            // =====================使用布隆过滤器过滤重复岗位===========================
            //生成一个随机秒速
            await delay(Math.floor(Math.random() * 2000) + 1000);
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

                await delay(300);

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
                if (await checkElementExitNoDelay('.boss-active-time', page)) {
                    active = await page.$eval('.boss-active-time', (el: { textContent: any; }) => {
                        return el.textContent
                    });
                }
                //根据当前活跃状态，然后判断是否需要打招呼
                let flag: boolean = callActivityLevel(active, this.activeLevel);
                if (!flag) {
                    await delay(300);
                    // 自动打招呼
                    await this.chatAndSendMeg(page);
                } else {
                    console.log('当前岗位不符合打招呼条件');
                }
            }
        }
    }

    //需要模拟自动打招呼
    async chatAndSendMeg(page: any) {
        //投简历
        if (await checkElementExit('.btn-minor', page)) {
            console.log('可以投简历投简历');
            await page.click('.btn-minor');
            
            if(await checkElementExit('#rc_unique_0', page)) {
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
        if (await checkElementExit('.btn-main', page)) {
            console.log('可以聊一聊');
            await page.click('.btn-main');
            await delay(800);
            //这里需要循环，如果迟迟没有弹窗，重试
            while (!await checkElementExit('#im-chatwin', page)) {
                await page.click('.btn-main');
                console.log("正在重试中...");
                await delay(200);
            }
            if (await checkElementExit('#im-chatwin', page) && await checkElementExit('.ant-input', page)) {
                await page.waitForSelector('.ant-input');
                await page.focus('.ant-input')
                await page.type('.ant-input', this.greetSentence, { delay: 100 }); // 输入变慢，像一个用户
                await delay(300);
                await page.keyboard.press('Enter');
                await delay(300);
            }
        }
        await delay(100);
    }

    /**
     * 方法三：进入聊天界面，回访打过招呼的岗位
     */
    async revisitAndChat() {
        //获取登录状态
        const page = await checkLoginStatu('boss');
        try {
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
                await delay(100);

                await page.mouse.wheel({ deltaY: 78 }); // 向下滚动100像素

                await page.waitForSelector('#chat-input');
                await page.focus('#chat-input');

                await page.type('#chat-input', 'Good afternoon, my name is Tom, and I am grateful to see this position on the recruitment software.\n I am excited about the opportunity to apply for the position of telemarketing at your company. I am confident that my skills and experience align well with the requirements of this role.\nI have been following the success of your company in the field of telemarketing, and I am particularly interested in the role of telemarketing in ensuring quality products.\nCan I apply for this?', { delay: 5 }); // 输入变慢，像一个用户

                await page.keyboard.press('Enter');

                await delay(100);
            }
        } catch (e) {
            console.log(e, "Error reported，but need to continue running！")
        }
    }

    /**
     * 启动爬虫测试，保存数据
     * @returns 
     */
    async startSpider() {
        try {
            const page = await checkLoginStatu('boss');

            await page.goto('https://www.zhipin.com/web/geek/chat');

            await delay(200);
            let jobList = ['Java开发'];
            let cityList = ['101280100'];
            for (let i = 0; i < jobList.length; i++) {
                for (let j = 0; j < cityList.length; j++) {
                    let originUrl = 'https://www.zhipin.com/web/geek/job?' + 'query=' + jobList[i] + '&city=' + cityList[j];

                    const totalPage = Number(await this.obtainTotalPage(page, originUrl));

                    const allJobs = await this.crawlDetailUrl(page, totalPage, originUrl);

                    await this.crawlDetailInfo(page, allJobs, true, false);
                }
            }
        } catch (e) {
            console.log(e, "Error reported，but need to continue running！")
        }
    }


    /**
    * 启动爬虫测试，保存数据
    * @returns 
    */
    async obtainCookieByFile() {
        let content = "";
        try {
            content = await obtainContentByFile();
        } catch (e) {
            console.log(e, "Error reported，but need to continue running！")
        }
        return content;
    }

    @Inject(EntityManager)
    private entityManager: EntityManager;
}

