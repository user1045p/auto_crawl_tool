import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { JobDetail } from '../entites/JobDetail';
import { User } from '../entites/User';
import { attempt, splitUrl, login, ensureElementExists, generateUUID, removeEmojis, buildQueryParams, getUrlBySameParams } from '../utils/zhaopin.util';
import { checkLoginStatu, createPage,getBaseUrl, checkElementExit, readCookie, isDuplicateJob, generateMD5, delay } from '../utils/common.util';
import { AutoChatDto } from 'src/entites/dto/AutoChatDto';

@Injectable()
export class ZhaopinService {

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
            if (user != null && user.zhaopin_cookie != "" && user.zhaopin_cookie != null) {
                let tempCookie = user.zhaopin_cookie;
                readCookie(tempCookie, "zhaopin");
                page = await checkLoginStatu('zhaopin');
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
                newUser.zhaopin_cookie = cookieText;
                await this.entityManager.save(User, newUser);
            } else {
                user.username = "admin";
                user.password = "admin";
                user.phone = "12345678901";
                user.email = "admin@admin.com";
                user.last_login = "11";
                user.sex = "男";
                user.zhaopin_cookie = cookieText;
                await this.entityManager.update(User, { id: user.id }, user);
            }
            if (!this.entityManager) {
                throw new Error('EntityManager is not defined');
            }
            let jd = await getUrlBySameParams(autoChatDto.jd, page);
            let lastParam = buildQueryParams(autoChatDto);
            let param = "https://www.zhaopin.com/sou/jl" + autoChatDto.areaId + "/" + jd + "/p1?" + lastParam;
            await page.goto(param);
            let totalPage = await this.obtainLastPage(page, param);
            for(let i = 1; i <= totalPage; i++){
                const allJobs = await this.crawlDetailUrl(page, i, param);
                await this.crawlDetailInfo(page, allJobs, false, true);
            }
        } catch (e) {
            console.log(e)
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
        await page.waitForSelector('.job-list-box');
        //获取总页数
        const totalPage = await page.$eval('.options-pages a:nth-last-child(2)', e => {
            return parseInt(e.textContent)
        });
        //获取国内一二线城市
        return totalPage;
    }

    /**
     * 爬取详情页链接
     */
    async crawlDetailUrl(page: any, pageNum: number, originUrl: string) {
        //处理url路径
        let tempUrl = splitUrl(originUrl);
        const allJobs = [];
        // for (let i = 1; i <= totalPage; i++) {
            await page.goto(tempUrl.before + '/p' + pageNum + '?' + tempUrl.after);
            await page.waitForSelector('.positionlist__list');
            const jobs = await page.$eval('.positionlist__list', el => {
                return [...el.querySelectorAll('.joblist-box__item')].map(item => {
                    //这里有个bug,
                    if (item.querySelector('.companyinfo__staff-state') != null) {
                        return {
                            company_name: item.querySelector('.companyinfo__name').textContent.trim(),
                            job_name: item.querySelector('.jobinfo__name').textContent.trim(),
                            detail_link: item.querySelector('a').href,
                            //岗位活跃度=========我猜测是这个岗位最晚什么时候被人投递过=======
                            recruitment_activity: item.querySelector('.companyinfo__staff-state').textContent.trim() || "",
                            //公司标签：公司性质，公司规模，公司主要业务
                            company_tag: [...item.querySelectorAll('.companyinfo__tag>.joblist-box__item-tag')].map((item: Element) => item.textContent.trim()).join(";") || "",
                            //岗位标签：
                            job_tag: [...item.querySelectorAll('.jobinfo__tag>.joblist-box__item-tag')].map((item: Element) => item.textContent.trim()).join(";") || "",
                        }
                    } else {
                        return {
                            company_name: item.querySelector('.companyinfo__name').textContent.trim(),
                            job_name: item.querySelector('.jobinfo__name').textContent.trim(),
                            detail_link: item.querySelector('a').href,
                            //岗位活跃度========我猜测是这个岗位最晚什么时候被人投递过========
                            recruitment_activity: "",
                            //公司标签：公司性质，公司规模，公司主要业务
                            company_tag: [...item.querySelectorAll('.companyinfo__tag>.joblist-box__item-tag')].map((item: Element) => item.textContent.trim()).join(";") || "",
                            //岗位标签：
                            job_tag: [...item.querySelectorAll('.jobinfo__tag>.joblist-box__item-tag')].map((item: Element) => item.textContent.trim()).join(";") || "",
                        }
                    }
                })
            });
            allJobs.push(...jobs);
        // }
        return allJobs;
    }

    /**
     * 访问岗位详情页
     * @param page 
     * @param allJobs 工作信息列表
     * @param isCrawlInfo 是否保存数据
     * @param isAutoChat 是否自动打招呼
     */
    async crawlDetailInfo(page: any, allJobs: Array<JobDetail>, isCrawlInfo: boolean, isAutoChat: boolean) {
        let error = 0;
        let errorList = [];
        for (let i = 0; i < allJobs.length; i++) {
            try {

                // ===========使用布隆过滤器过滤重复岗位(根据URL来判断，更准确)===============
                let tempURL=getBaseUrl(allJobs[i].detail_link);
                const beforeKey = `${tempURL}-zhaopin`;
                const beforeKeyHash = generateMD5(beforeKey); // 生成MD5摘要
                const isBeforeDuplicate = await isDuplicateJob(beforeKeyHash);
                if (isBeforeDuplicate) {
                    console.log(`此岗位已经投递过`);
                    await delay(Math.floor(Math.random() * 1000) + 100);
                    continue;
                }
                // =====================使用布隆过滤器过滤重复岗位===========================
                
                await page.goto(allJobs[i].detail_link, { timeout: 10000 });

                // ===========使用布隆过滤器过滤重复岗位(弃用)===============
                // const jobKey = `${allJobs[i].company_name}-${allJobs[i].job_name}-zhaopin`;
                // const jobKeyHash = generateMD5(jobKey); // 生成MD5摘要
                // const isDuplicate = await isDuplicateJob(jobKeyHash);
                // if (isDuplicate) {
                //     console.log(`此岗位已经投递过`);
                //     await delay(Math.floor(Math.random() * 2000) + 1000);
                //     continue;
                // }
                // ===========使用布隆过滤器过滤重复岗位===============
                if (isCrawlInfo) {
                    //岗位发布时间（或者岗位更新版本后的时间）
                    let publicTime = ''
                    await page.waitForSelector('.summary-plane__time');
                    if (await checkElementExit('.summary-plane__time', page)) {
                        publicTime = await ensureElementExists('.summary-plane__time', page);
                        // publicTime = await page.$eval('.summary-plane__time', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].public_time = publicTime;

                    //岗位名称
                    await page.waitForSelector('.summary-plane__title');
                    let positionName = ''
                    if (await checkElementExit('.summary-plane__title', page)) {
                        positionName = await ensureElementExists('.summary-plane__title', page);
                        // positionName = await page.$eval('.summary-plane__title', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].position_name = positionName;

                    //薪资
                    let salary = ''
                    await page.waitForSelector('.summary-plane__salary');
                    if (await checkElementExit('.summary-plane__salary', page)) {
                        await page.waitForFunction(
                            () => document.querySelector('.summary-plane__salary')?.textContent.trim() !== ''
                        );
                        salary = await ensureElementExists('.summary-plane__salary', page);
                        // salary = await page.$eval('.summary-plane__salary', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].salary = salary;

                    //工作城市
                    let city = '';
                    await page.waitForSelector('.summary-plane__left');
                    if (await checkElementExit('.summary-plane__left li:nth-child(1)', page)) {
                        city = await ensureElementExists('.summary-plane__left li:nth-child(1)', page);
                        // city = await page.$eval('.summary-plane__left li:nth-child(1)', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].city = city;

                    //街道
                    let street = '';
                    await page.waitForSelector('.summary-plane__left');
                    if (await checkElementExit('.summary-plane__left li:nth-child(2)', page)) {
                        street = await ensureElementExists('.summary-plane__left li:nth-child(2)', page);
                        // street = await page.$eval('.summary-plane__left li:nth-child(2)', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].street = street;

                    //工作经验(年限)
                    let experience = '';
                    await page.waitForSelector('.summary-plane__left');
                    if (await checkElementExit('.summary-plane__left li:nth-last-child(4)', page)) {
                        experience = await ensureElementExists('.summary-plane__left li:nth-last-child(4)', page);
                        // experience = await page.$eval('.summary-plane__left li:nth-last-child(4)', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].experience = experience;

                    //教育背景
                    let education = '';
                    await page.waitForSelector('.summary-plane__left');
                    if (await checkElementExit('.summary-plane__left li:nth-last-child(3)', page)) {
                        education = await ensureElementExists('.summary-plane__left li:nth-last-child(3)', page);
                        // education = await page.$eval('.summary-plane__left li:nth-last-child(3)', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].education = education;

                    //就业形式
                    let employmentType = '';
                    await page.waitForSelector('.summary-plane__left');
                    if (await checkElementExit('.summary-plane__left li:nth-last-child(2)', page)) {
                        employmentType = await ensureElementExists('.summary-plane__left li:nth-last-child(2)', page);
                        // employmentType = await page.$eval('.summary-plane__left li:nth-last-child(2)', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].employment_type = employmentType;

                    //招聘人数                    
                    let headCount = '';
                    await page.waitForSelector('.summary-plane__left');
                    if (await checkElementExit('.summary-plane__left li:nth-last-child(1)', page)) {
                        headCount = await ensureElementExists('.summary-plane__left li:nth-last-child(1)', page);
                        // headCount = await page.$eval('.summary-plane__left li:nth-last-child(1)', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].head_count = headCount;

                    //职位描述
                    // await page.waitForSelector('.describtion__detail-content');
                    let positionDesc = '';
                    if (await checkElementExit('.describtion__detail-content', page)) {
                        positionDesc = await ensureElementExists('.describtion__detail-content', page);
                        // positionDesc = await page.$eval('.describtion__detail-content', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].position_desc = removeEmojis(positionDesc);

                    //所需技能
                    // await page.waitForSelector('.describtion__skills-content');
                    let technologySkills = '';
                    if (await checkElementExit('.describtion__skills-content', page)) {
                        technologySkills = await page.$$eval('.describtion__skills-item', elements => {
                            if (!Array.isArray(elements)) {
                                elements = [elements]; // 如果 elements 不是数组，则将其转换为数组
                            }
                            return elements.map(item => item.textContent.trim()).join(';');
                        });
                    }
                    allJobs[i].technology_skills = technologySkills;

                    //公司详细地址
                    let address = ''
                    if (await checkElementExit('.job-address__content-text', page)) {
                        address = await ensureElementExists('.job-address__content-text', page);
                        // address = await page.$eval('.job-address__content-text', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].address = address;

                    //HR姓名
                    let hr_name = ''
                    if (await checkElementExit('.manager__detail-name', page)) {
                        hr_name = await ensureElementExists('.manager__detail-name', page);
                        hr_name = await page.$eval('.manager__detail-name', el => {
                            return el.textContent.trim()
                        });
                    }
                    allJobs[i].human_resource_name = hr_name;

                    //HR活跃程度
                    let hr_activity = ''
                    if (await checkElementExit('.manager__detail-label', page)) {
                        hr_activity = await ensureElementExists('.manager__detail-label', page);
                        // hr_activity = await page.$eval('.manager__detail-label', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].human_resource_activity = hr_activity;

                    //公司名称
                    let companyaName = ''
                    if (await checkElementExit('.company__title', page)) {
                        companyaName = await ensureElementExists('.company__title', page);
                        // companyaName = await page.$eval('.company__title', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].company_name = companyaName;

                    //公司行业(业务)
                    let companyIndustry = ''
                    if (await checkElementExit('.company__industry', page)) {
                        companyIndustry = await ensureElementExists('.company__industry', page);
                        // companyIndustry = await page.$eval('.company__industry', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].company_industry = companyIndustry;

                    //公司规模
                    let companySize = ''
                    if (await checkElementExit('.company__size', page)) {
                        companySize = await ensureElementExists('.company__size', page);
                        // companySize = await page.$eval('.company__size', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].company_size = companySize;

                    //融资情况
                    let fundStatus = ''
                    if (await checkElementExit('.company__size', page)) {
                        fundStatus = await ensureElementExists('.company__size', page);
                        // fundStatus = await page.$eval('.company__size', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].fund_status = fundStatus;

                    //公司简介
                    let companyDesc = '';
                    if (await checkElementExit('.company__description', page)) {
                        companyDesc = await ensureElementExists('.company__description', page);
                        // companyDesc = await page.$eval('.company__description', el => {
                        //     return el.textContent.trim()
                        // });
                    }
                    allJobs[i].company_desc = companyDesc;

                    //============通用属性=============
                    allJobs[i].position_status = "正常"
                    allJobs[i].unique_id = generateUUID();
                    allJobs[i].record_status = 0;
                    allJobs[i].source_website = 2;

                    await delay(200);

                    const job = new JobDetail();
                    job.recruitment_activity = allJobs[i].recruitment_activity;
                    job.salary = allJobs[i].salary;
                    job.address = allJobs[i].address;
                    job.city = allJobs[i].city;
                    job.company_industry = allJobs[i].company_industry;
                    job.company_desc = allJobs[i].company_desc;
                    job.company_name = allJobs[i].company_name;
                    job.company_nature = allJobs[i].company_nature;
                    job.company_size = allJobs[i].company_size;
                    job.detail_link = allJobs[i].detail_link;
                    job.education = allJobs[i].education;
                    job.employment_type = allJobs[i].employment_type;
                    job.experience = allJobs[i].experience;
                    job.fund_status = allJobs[i].fund_status;
                    job.head_count = allJobs[i].head_count;
                    job.human_resource_activity = allJobs[i].human_resource_activity;
                    job.human_resource_name = allJobs[i].human_resource_name;
                    job.position_desc = allJobs[i].position_desc;
                    job.position_name = allJobs[i].position_name;
                    job.position_status = allJobs[i].position_status;
                    job.public_time = allJobs[i].public_time;
                    job.record_status = allJobs[i].record_status;
                    job.source_website = allJobs[i].source_website;
                    job.street = allJobs[i].street;
                    job.technology_skills = allJobs[i].technology_skills;
                    job.unique_id = allJobs[i].unique_id;
                    job.log_id = "log_id";
                    await this.entityManager.save(JobDetail, job);
                }
                if (isAutoChat) {
                    // 自动打招呼
                    await this.chatAndSendMeg(page);
                }
            } catch (e) {
                error += 1;
                errorList = errorList.concat(allJobs[i].detail_link);
                throw e;
            }
        }
    }

    //需要模拟自动打招呼
    async chatAndSendMeg(page: any) {
        await delay(800);
        //模拟点击立即沟通
        await page.click('.summary-plane__action');
        if (await checkElementExit('.a-job-apply-workflow', page)|| await checkElementExit('.a-modal__content', page)) {
            const content = await page.content();
            if (content.indexOf("太贪心啦") > -1 || content.indexOf("今日投递已达到上限！") > -1) {
                console.log("今日投递已达到上限！");
                throw Error("今日投递已达到上限！");
            }
        }
        //这里需要判断是否有新的窗口打开，暂时先不做了
        await delay(800);
        console.log("岗位投递完成！");
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
        await page.goto('https://www.zhaopin.com/sou/');
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
                return urls;
            } catch (error) {
                console.log(error);
            }
        }
    }


    @Inject(EntityManager)
    private entityManager: EntityManager;
}

