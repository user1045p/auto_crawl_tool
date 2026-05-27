import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Job } from '../entites/Job';
import { User } from '../entites/User';
import { login, callActivityLevel, buildQueryParams } from '../utils/boss.util';
import { isDuplicateJob, createPage, generateMD5,getBaseUrl, checkElementExitNoDelay, checkLoginStatu, delay, obtainContentByFile, readCookie, checkElementExit } from '../utils/common.util';
import { AutoChatDto } from 'src/entites/dto/AutoChatDto';

@Injectable()
export class BossService {

    //防止方法之间传递变量过深，定义了这个公共变量
    public greetSentence: string = 'Hello';

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
            const user = await this.entityManager.findOne(User, {
                where: { id: 1 }
            });
            if (autoChatDto.exitAccount == 'true' || autoChatDto.phone != '') {
                if (user != null) {
                    user.boss_cookie = "";
                }
            }
            if ((user != null && user.boss_cookie != null && user.boss_cookie != "")) {
                let tempCookie = user.boss_cookie;
                readCookie(tempCookie, "boss");
                page = await checkLoginStatu('boss');
                await delay(200);
                let content = await page.content();
                if (content.indexOf('当前登录状态已失效') > -1) {
                    await login(page, autoChatDto);
                }
            } else {
                //开启新页面
                page = await createPage();
                //先进行登录--为后续可以沟通做准备
                await login(page, autoChatDto);
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
                newUser.boss_cookie = cookieText;
                await this.entityManager.save(User, newUser);
            } else {
                user.username = "admin";
                user.password = "admin";
                user.phone = "12345678901";
                user.email = "admin@admin.com";
                user.last_login = "11";
                user.sex = "男";
                user.boss_cookie = cookieText;
                await this.entityManager.update(User, { id: user.id }, user);
            }
            let params = buildQueryParams(autoChatDto);
            let originUrl = 'https://www.zhipin.com/web/geek/job?' + params;
            const totalPage = Number(await this.obtainTotalPage(page, originUrl));
            for(let i = 1; i <= totalPage; i++){
                const allJobs = await this.crawlDetailUrl(page, i, originUrl);
                await this.crawlDetailInfo(page, allJobs, false, true);
            }
        } catch (e) {
            this.startUpFlag = false;
            console.log("程序结束！")
        }
    }

    /**
     * 截取字符串
     */
    async obtainTotalPage(page: any, originUrl: string) {
        await page.goto(originUrl);
        await page.waitForSelector('.job-list-box');
        //获取总页数
        const totalPage = await page.$eval('.options-pages a:nth-last-child(2)', (e: { textContent: string; }) => {
            return parseInt(e.textContent)
        });
        return totalPage;
    }

    /**
     * 爬取详情页链接
     */
    async crawlDetailUrl(page: any, pageNum: number, originUrl: string) {
        const allJobs = [];
        // for (let i = 1; i <= totalPage; i++) {

            await page.goto(originUrl + '&page=' + pageNum);

            await page.waitForSelector('.job-list-box');

            const jobs = await page.$eval('.job-list-box', (el: { querySelectorAll: (arg0: string) => any; }) => {
                return [...el.querySelectorAll('.job-card-wrapper')].map(item => {
                    return {
                        company: {
                            name: item.querySelector('.company-name').textContent,
                        },
                        job: {
                            name: item.querySelector('.job-name').textContent,
                            area: item.querySelector('.job-area').textContent,
                            salary: item.querySelector('.salary').textContent,
                            tag_list: item.querySelector('.tag-list').textContent,
                            info_info: item.querySelector('.info-desc').textContent
                        },
                        link: item.querySelector('a').href,
                    }
                })
            });
            allJobs.push(...jobs);
        // }
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

            // ===========使用布隆过滤器过滤重复岗位(根据URL来判断，更准确)===============
            let tempURL=getBaseUrl(allJobs[i].link);
            const beforeKey = `${tempURL}-boss`;
            const beforeKeyHash = generateMD5(beforeKey); // 生成MD5摘要
            const isBeforeDuplicate = await isDuplicateJob(beforeKeyHash);
            if (isBeforeDuplicate) {
                console.log(`此岗位已经投递过`);
                await delay(Math.floor(Math.random() * 1000) + 100);
                continue;
            }
            // =====================使用布隆过滤器过滤重复岗位===========================

            await page.goto(allJobs[i].link, { timeout: 10000 });

            if (await checkElementExitNoDelay('.wrap-verify-slider', page)) {
                //需要点击认证
                await delay(10000);
            }

            // ===========使用布隆过滤器过滤重复岗位(弃用)===============
            // const jobKey = `${allJobs[i].company}-${allJobs[i].job.name}-${allJobs[i].job.area}-${allJobs[i].job.salary}-boss`;
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

                let active = ''
                if (await checkElementExitNoDelay('.boss-active-time', page)) {
                    active = await page.$eval('.boss-active-time', (el: { textContent: any; }) => {
                        return el.textContent
                    });
                }
                //根据当前活跃状态，然后判断是否需要打招呼
                let flag: boolean = callActivityLevel(active, this.activeLevel);
                if (flag) {
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
        //模拟点击立即沟通
        await page.click('.btn-startchat');
        await delay(100);
        //等待弹窗出现--不设置打招呼语，不会出现弹窗了
        // await page.waitForSelector('.dialog-container');
        if (await checkElementExitNoDelay('.dialog-container', page)) {
            const content = await page.content();
            if (content.indexOf('工作经历不匹配') > -1) {
                console.log('工作经历不匹配，跳过该岗位');
                return;
            }
        }
        if (await checkElementExitNoDelay('.security-thumb-image', page)&&await checkElementExitNoDelay('.icon-close', page)) {
            const content = await page.content();
            if (content.indexOf('尚未设置邮箱验证') > -1) {
                await page.click('.icon-close');
                await delay(300);
            }
        }
        //如果出现弹窗，说明只需要在弹窗输入信息即可 
        if (await checkElementExitNoDelay('.dialog-container', page) && await checkElementExitNoDelay('.input-area', page)) {
            await page.waitForSelector('.input-area');
            await page.focus('.input-area')
            await page.type('.input-area', this.greetSentence, { delay: 100 }); // 输入变慢，像一个用户
            await delay(300);
            await page.keyboard.press('Enter');
            await delay(300);
        } else {
            await page.waitForSelector('#chat-input');
            await page.$eval('#chat-input', (input: { focus: () => void; innerText: string; }) => {
                input.focus();
                input.innerText = '';
            })
            await delay(300);
            //因为这是label标签，需要使用innerText，如果是输入框就是value
            //输入框不能使用设值的方式，因为前端会监听输入框内容的变化，不然不会显示发送按钮
            // let inputSelector='#chat-input';
            // let inputValue='Hello,Is this job still available?Look forward to your reply.';
            // await page.$eval(inputSelector, (el:any, value:any) => el.innerText = value, inputValue);
            await page.focus('#chat-input')
            await page.type('#chat-input', this.greetSentence, { delay: 50 }); // 输入变慢，像一个用户
            await delay(300);
            await page.keyboard.press('Enter');
            await delay(300);
        }
        if (await checkElementExit('.dialog-container', page)) {
            const content = await page.content();
            if (content.indexOf('无法进行沟通') > -1 || content.indexOf('今日沟通人数已达上限') > -1) {
                console.log('今日沟通数量已达上限，请明天再试！');
                throw Error("今日沟通数量已达上限，请明天再试！");
            }
        }        
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
            console.log("程序结束")
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

