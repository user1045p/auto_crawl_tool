import { Injectable, OnModuleInit, OnModuleDestroy, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import * as wd from 'wd';
import { AppiumConfig } from '../interfaces/appium-config.interface';
import { CommonAppiumService } from './common.appium.service';

@Injectable()
export class ZhipinAppiumService implements OnModuleInit, OnModuleDestroy {
    private driver: WebdriverIO.Browser;
    private config: AppiumConfig;

    constructor(private configService: ConfigService, @Inject(CommonAppiumService) private readonly commonAppiumService: CommonAppiumService,
    ) {
        this.config = {
            capabilities: {
                platformName: 'Android',
                'appium:deviceName': '127.0.0.1:7555', // 默认值,
                'appium:platformVersion': '12',
                'appium:appPackage': 'com.zhaopin.social',
                'appium:appActivity': 'com.zhaopin.social.SplashActivity',
                'appium:automationName': 'UiAutomator2',
                'appium:noReset': true,
                'appium:skipServerInstallation':false
            },
            services: ['appium'],
            logLevel: 'error',
            port: 4723, // Appium默认端口
            path: '/',
            connectionRetryCount: 3
        };
        this.commonAppiumService.setConfig(this.config);
    }

    async onModuleInit() {
        this.driver = this.commonAppiumService.getDriver(); // Get the driver from CommonAppiumService
        await this.startProcess();
    }

    async onModuleDestroy() {
        // if (this.driver) {
        //     await this.driver.quit(); // 关闭会话
        // }
    }

    // 示例：点击登录按钮
    async startProcess(): Promise<void> {
        try {
            // Wait for the first TextView element to be present and visible
            const searchBtn = await this.waitForElementByIdIndefinitely('com.zhaopin.social:id/ll_search');
            await searchBtn.click();

            // Wait for the inputText element to be present and visible
            const inputBox = await this.waitForElementByIdIndefinitely('com.zhaopin.social:id/et_keyword');
            await inputBox.addValue('销售'); // Corrected method name to sendKeys

            // Wait for the tv_search button to be present and visible
            const button = await this.waitForElementByIdIndefinitely('com.zhaopin.social:id/tv_search');
            await button.click();

            await this.driver.pause(500);
            // 判断这个元素是否存在，如果存在就点击 com.job.android:id/ivBack
            try {
                // Wait for the element to be present and visible
                await this.driver.$('com.job.android:id/ivBack').waitForDisplayed({ timeout: 10000, interval: 2000 });
                const backButton = await this.driver.$('com.job.android:id/ivBack');
                if (backButton) {
                    await backButton.click();
                }
            } catch (error) {
                console.log('Element com.job.android:id/ivBack not found !');
            }
            //筛选条件的选取
            await this.driver.pause(500);

            //城市按钮：com.zhaopin.social:id/tv_name
            const cityButton = await this.waitForElementByIdIndefinitely('com.zhaopin.social:id/tv_name');
            await cityButton.click();

            //点击切换城市：com.zhaopin.social:id/business_select_dialog_selected_check
            // const cityButton2 =await this.driver.waitForElementById('com.zhaopin.social:id/business_select_dialog_selected_check', 10000, 2000);
            // await cityButton2.click();

            // 或更推荐的方式（使用 async/await 避免嵌套）：
            const cityButton2 = await this.driver.$('id:com.zhaopin.social:id/business_select_dialog_selected_check');
            await cityButton2.waitForExist({ timeout: 2000 });
            await cityButton2.click();

            //省份名称：com.zhaopin.social:id/tv_address，还需要匹配text,如果没有就往上滑动
            let citySourceId = 'com.zhaopin.social:id/tv_address'
            await this.selectElementByIdAndText(citySourceId, '广东');
            await this.selectElementByIdAndText(citySourceId, '广州');

            //选择区县：com.zhaopin.social:id/tv_name
            const areaButton = await this.waitForElementByIdIndefinitely('com.zhaopin.social:id/tv_name');
            await areaButton.click();

            //区域：com.zhaopin.social:id/item_root_view，还需要匹配text,如果没有就往上滑动
            // let areaSourceId='com.zhaopin.social:id/tv_name'
            // await this.selectElementByIdAndText(areaSourceId,'深圳');

            //点击区域按钮：com.zhaopin.social:id/business_select_dialog_rl_area
            const areaButton2 = await this.driver.$('id:com.zhaopin.social:id/business_select_dialog_rl_area');
            await areaButton2.waitForExist({ timeout: 2000 });
            await areaButton2.click();


            //区域：com.zhaopin.social:id/item_root_view，还需要匹配text,如果没有就往上滑动
            let areaSourceId2 = 'com.zhaopin.social:id/tv_name'
            await this.selectElementByIdAndText(areaSourceId2, '白云区');

            //点击确认按钮：com.zhaopin.social:id/business_select_dialog__confirm
            const confirmButton = await this.waitForElementByIdIndefinitely('com.zhaopin.social:id/business_select_dialog__confirm');
            await confirmButton.click();

            //筛选按钮：com.zhaopin.social:id/in_new_more_filter
            const filterButton = await this.waitForElementByIdIndefinitely('com.zhaopin.social:id/in_new_more_filter');
            await filterButton.click();
            await this.driver.pause(500);


            //一级筛选：com.zhaopin.social:id/tvPrimaryTitle，@text()
            await this.selectElementByIdAndText('com.zhaopin.social:id/tvPrimaryTitle', '薪资');

            //二级筛选：android.widget.TextView，@text()
            await this.selectElementByIdAndText(null, '4千以下')

            //点击确认按钮：com.zhaopin.social:id/tvSubmit
            const submitBtn = await this.waitForElementByIdIndefinitely('com.zhaopin.social:id/tvSubmit');
            await submitBtn.click();

            //点击清空条件按钮：com.zhaopin.social:id/business_select_dialog_reset
            // Simulate a swipe-up gesture
            await this.swipeAndAction();
            console.log("点击结束！");
        } catch (error) {
            throw new Error(`点击登录按钮失败: ${error.message}`);
        }
    }

    private async waitForElementByIdIndefinitely(elementId: string): Promise<WebdriverIO.Element> {
        while (true) {
            try {
                // Explicitly cast the returned element to WebdriverIO.Element
                const element = await this.driver.$('id:' + elementId) as unknown as WebdriverIO.Element;
                await element.waitForDisplayed({ timeout: 10000, interval: 2000 });
                return element;
            } catch (error) {
                console.log(`Element with ID ${elementId} not found, retrying...`);
                await this.driver.pause(500); // Wait for 500ms before retrying
            }
        }
    }


    private async selectElementByIdAndText(resourceId: string, text: string): Promise<void> {
        let attempts = 0;
        const maxAttempts = 5;

        // Build more robust XPath
        const xpath = resourceId
            ? `//android.widget.TextView[@resource-id="${resourceId}" and @text="${text}"]`
            : `//android.widget.TextView[@text="${text}"]`;

        while (attempts < maxAttempts) {
            try {
                const element = await this.driver.$(xpath);

                // Wait for element to exist
                await element.waitForExist({ timeout: 5000 });

                await element.click();
                console.log(`Successfully clicked on element: ${text}`);
                return;

            } catch (error) {
                console.log(`Attempt ${attempts + 1}/${maxAttempts} failed: ${error.message}`);
                // If click fails, get element position and scroll to it
                await this.scrollToCoordinates(50, 200);
                console.log(`Successfully clicked after scrolling: ${text}`);
                attempts++;
            }
        }
        throw new Error(`Element with ${resourceId ? 'resourceId ' + resourceId : ''} and text "${text}" not found after ${maxAttempts} attempts`);
    }

    private async scrollToCoordinates(x: number, y: number): Promise<void> {
        // Get screen dimensions for scroll calculation
        const windowSize = await this.driver.getWindowSize();

        // Calculate scroll start/end points (scroll up to bring target into view)
        const startY = y + 50;  // Start below the target
        const endY = y - 50;    // End above the target

        await this.driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: x, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 500 }, // 滑动持续时间
                    { type: 'pointerMove', duration: 600, x: y, y: endY }, // 600ms内完成滑动
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        // Add small delay after scroll
        await this.driver.pause(300);
    }


    async getElementText(selector: string, timeout: number = 10000): Promise<string> {
        try {
            const element = await this.driver.$(`id:`+selector);
            await element.waitForDisplayed({ timeout });
            const text = await element.getText();
            return text;
        } catch (error) {
            throw new Error(`Element with selector '${selector}' not found or not visible`);
        }
    }

    async getTextWithRetry(selector: string, maxAttempts: number = 3): Promise<string> {
        let attempts = 0;
        const windowSize = await this.driver.getWindowSize();
        while (attempts < maxAttempts) {
            try {
                return await this.getElementText(selector);
            } catch (error) {
                console.log(`Attempt ${attempts + 1}/${maxAttempts} failed`);
                try {
                    const startX = windowSize.width / 2;
                    const endX = windowSize.width / 2;
                    const startY = windowSize.height * 0.5; // Start from 80% of the screen height
                    const endY = windowSize.height * 0.5-120;   // End at 20% of the screen height
                    console.log("startX:" + startX, "startY:" + startY, "endY:" + endY);
                    // 2. 使用新版 touchAction 语法
                    await this.driver.performActions([
                        {
                            type: 'pointer',
                            id: 'finger1',
                            parameters: { pointerType: 'touch' },
                            actions: [
                                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                                { type: 'pointerDown', button: 0 },
                                { type: 'pause', duration: 1 }, // 滑动持续时间
                                { type: 'pointerMove', duration: 100, x: startX, y: endY }, // 600ms内完成滑动
                                { type: 'pointerUp', button: 0 }
                            ]
                        }
                    ]);
                } catch (error) {
                    console.log(`滑动失败: ${error.message}`);
                }    
                attempts++;
            }
        }
        
        throw new Error(`Failed to get element text after ${maxAttempts} attempts`);
    }


    private async swipeAndAction(): Promise<void> {
        let count = 0;
        while (true) {
            try {
                const windowSize = await this.driver.getWindowSize();
                const startX = windowSize.width / 2;
                const endX = windowSize.width / 2;
                const startY = windowSize.height * 0.5; // Start from 80% of the screen height
                const endY = windowSize.height * 0.5-200;   // End at 20% of the screen height
                console.log("startX:" + startX, "startY:" + startY, "endY:" + endY);

                // 2. 使用新版 touchAction 语法
                await this.driver.performActions([
                    {
                        type: 'pointer',
                        id: 'finger1',
                        parameters: { pointerType: 'touch' },
                        actions: [
                            { type: 'pointerMove', duration: 0, x: startX, y: startY },
                            { type: 'pointerDown', button: 0 },
                            { type: 'pause', duration: 500 }, // 滑动持续时间
                            { type: 'pointerMove', duration: 600, x: startX, y: endY }, // 600ms内完成滑动
                            { type: 'pointerUp', button: 0 }
                        ]
                    }
                ]);
            } catch (error) {
                console.log(`滑动失败: ${error.message}`);
            }

            //点击岗位详情
            try {
                const firstElement = await this.driver.$('id:com.zhaopin.social:id/cl_root');
                await firstElement.waitForDisplayed({ timeout: 10000, interval: 2000 });
                await firstElement.click();
            } catch (error) {
                console.log("第一个元素不存在或不可见，继续滑动");
                continue;
            }


            //岗位名称
            //com.zhaopin.social:id/tv_job_name_new
            try {
                const jobName = await this.getTextWithRetry('com.zhaopin.social:id/tv_job_name_new');
                console.log('jobName:', jobName);
            } catch (error) {
                console.log('Handling error:', error.message);
            }

            // 薪资
            // com.zhaopin.social:id/tv_salary_new
            try {
                const jobName = await this.getTextWithRetry('com.zhaopin.social:id/tv_salary_new');
                console.log('salary:', jobName);
            } catch (error) {
                console.log('Handling error:', error.message);
            }

            // 岗位标签（多个）
            // com.zhaopin.social:id/tv_tag
            try {
                const jobName = await this.getTextWithRetry('com.zhaopin.social:id/tv_tag');
                console.log('tag:', jobName);
            } catch (error) {
                console.log('Handling error:', error.message);
            }

            
            // 街道
            // com.zhaopin.social:id/tv_street
            try {
                const jobName = await this.getTextWithRetry('com.zhaopin.social:id/tv_street');
                console.log('street:', jobName);
            } catch (error) {
                console.log('Handling error:', error.message);
            }

            // 经验标签
            // com.zhaopin.social:id/layout_flow_skill
            try {
                const jobName = await this.getTextWithRetry('com.zhaopin.social:id/layout_flow_skill');
                console.log('skill:', jobName);
            } catch (error) {
                console.log('Handling error:', error.message);
            }

            // 岗位描述
            // com.zhaopin.social:id/tv_desc
            try {
                const jobName = await this.getTextWithRetry('com.zhaopin.social:id/tv_desc');
                console.log('desc:', jobName);
            } catch (error) {
                console.log('Handling error:', error.message);
            }

            // 公司名称
            // com.zhaopin.social:id/tv_company_name
            try {
                const jobName = await this.getTextWithRetry('com.zhaopin.social:id/tv_company_name');
                console.log('companyName:', jobName);
            } catch (error) {
                console.log('Handling error:', error.message);
            }

            // 公司描述
            // com.zhaopin.social:id/tv_company_desc
            try {
                const jobName = await this.getTextWithRetry('com.zhaopin.social:id/tv_company_desc');
                console.log('companyDesc:', jobName);
            } catch (error) {
                console.log('Handling error:', error.message);
            }

            //退出列表返回键
            //com.zhaopin.social:id/iv_back
            try {
                const leftButtonbtn = await this.driver.$('id:com.zhaopin.social:id/iv_back');
                await leftButtonbtn.waitForDisplayed({ timeout: 10000, interval: 2000 });
                await leftButtonbtn.click();
            } catch (error) {
                continue;
            }

            continue;

            // 立即投递
            // com.zhaopin.social:id/tv_deliver_or_chat

            // 继续沟通
            // com.zhaopin.social:id/fl_deliver_or_chat

            // 聊天输入框
            // com.zhaopin.social:id/editTextMessage

            // 发送按钮
            // com.zhaopin.social:id/buttonSendMessage


            // Wait for the list page to reload
            // await this.driver.sleep(2000); // Adjust the sleep time as necessary

            // try {
            //     // Click the "申请按钮"
            //     await this.driver.waitForElementById('com.job.android:id/applyButton', 10000, 2000);
            //     const applyButton = await this.driver.elementById('com.job.android:id/applyButton');
            //     await applyButton.click();
            // } catch (error) {
            //     console.error(`Failed to click the apply button: ${error.message}`);
            // }

            // Wait for the apply page to load
            await this.driver.pause(500); // Adjust the sleep time as necessary

            try {
                // Click the "去聊聊按钮"
                // await this.driver.waitForElementById('com.job.android:id/chatButtonBg', 10000, 2000);
                // const chatButton = await this.driver.elementById('com.job.android:id/chatButtonBg');
                // await chatButton.click();

                const chatButton = await this.driver.$('id:com.job.android:id/chatButtonBg');
                await chatButton.waitForDisplayed({ timeout: 10000, interval: 2000 });
                await chatButton.click();
            } catch (error) {
                console.error(`Failed to click the chat button: ${error.message}`);
            }

            // Wait for the chat page to load
            // await this.driver.sleep(2000); // Adjust the sleep time as necessary

            // try {
            //     // Click the "发送简历按钮"
            //     await this.driver.waitForElementByXPath('//android.widget.TextView[@text="发送简历"]', 10000, 2000);
            //     const sendResumeButton = await this.driver.elementByXPath('//android.widget.TextView[@text="发送简历"]');
            //     await sendResumeButton.click();
            // } catch (error) {
            //     console.error(`Failed to click the send resume button: ${error.message}`);
            // }

            // Wait for the send resume page to load
            // await this.driver.sleep(2000); // Adjust the sleep time as necessary

            // try {
            //     // Click the "交换微信按钮"
            //     await this.driver.waitForElementById('com.job.android:id/tv_send_wechat_request', 10000, 2000);
            //     const exchangeWeChatButton = await this.driver.elementById('com.job.android:id/tv_send_wechat_request');
            //     await exchangeWeChatButton.click();
            // } catch (error) {
            //     console.error(`Failed to click the exchange WeChat button: ${error.message}`);
            // }

            // Wait for the exchange WeChat page to load
            await this.driver.pause(2000); // Adjust the sleep time as necessary

            try {
                // Enter text into the chat box
                // await this.driver.waitForElementById('com.job.android:id/etContent', 10000, 2000);
                // const chatBox = await this.driver.elementById('com.job.android:id/etContent');
                // await chatBox.sendKeys('你好这个岗位还招人吗？');

                const chatBox = await this.driver.$('id:com.job.android:id/etContent');
                await chatBox.waitForExist({ timeout: 10000 });
                await chatBox.clearValue();  // 先清空输入框
                await chatBox.setValue('你好这个岗位还招人吗？');

            } catch (error) {
                console.error(`Failed to enter text into the chat box: ${error.message}`);
            }

            // Wait for the text to be entered
            await this.driver.pause(2000); // Adjust the sleep time as necessary

            try {
                // Click the "发送" button
                // await this.driver.waitForElementByXPath('//android.widget.TextView[@text="发送"]', 10000, 2000);
                // const sendButton = await this.driver.elementByXPath('//android.widget.TextView[@text="发送"]');
                // await sendButton.click();

                const sendButton = await this.driver.$('//android.widget.TextView[@text="发送"]');
                await sendButton.waitForDisplayed({ timeout: 10000, interval: 2000 });
                await sendButton.click();
            } catch (error) {
                console.error(`Failed to click the send button: ${error.message}`);
            }

            for (let i = 0; i < 2; i++) {
                // Wait for the detail page to load
                await this.driver.pause(2000); // Adjust the sleep time as necessary
                // Click the "退出列表返回键"
                try {
                    if (i == 0) {
                        const backButton = await this.driver.$('id:com.job.android:id/iv_title_back');
                        await backButton.waitForExist({ timeout: 2000 });
                        await backButton.click();
                    } else {
                        const backButton = await this.driver.$('id:com.job.android:id/iv_back');
                        await backButton.waitForExist({ timeout: 2000 });
                        await backButton.click();
                    }
                } catch (error) {
                    console.error(`Failed to click the back button: ${error.message}`);
                }
            }

            // Optionally, you can add more actions here

            // Continue to the next iteration

            continue;


            console.log("Detailed information for each element:");
            const uniqueElements = new Set<string>(); // To store composite keys
            console.log("count:" + count++);

            let elementsArray;
            for (let [index, ele] of elementsArray.entries()) {
                try {
                    // Retrieve child elements of the current parent element
                    const childElements = await ele.elements('class name', 'android.widget.TextView'); // Example: Find TextView children

                    console.log(`Parent Element Index: ${index}`);
                    console.log(`Number of Child Elements: ${childElements.length}`);

                    for (let [childIndex, childEle] of childElements.entries()) {
                        try {
                            const resourceId = await childEle.getAttribute('resourceId'); // Get the resource ID
                            const text = await childEle.text(); // Get the text content
                            const location = await childEle.getLocation(); // Get the location (x, y)
                            const size = await childEle.getSize(); // Get the size (width, height)

                            // Create a composite key using resourceId, text, and location
                            const compositeKey = `${resourceId}-${text}-${location.x}-${location.y}`;

                            // Add the composite key to the Set to ensure uniqueness
                            if (!uniqueElements.has(compositeKey)) {
                                uniqueElements.add(compositeKey);

                                // Log detailed information
                                // console.log(`Child Element Index : ${childIndex}`);
                                // console.log(`Composite Key: ${compositeKey}`);
                                // console.log(`Resource ID: ${resourceId}`);
                                // console.log(`Text Content: ${text}`);
                                // console.log(`Location: x=${location.x}, y=${location.y}`);
                                // console.log(`Size: width=${size.width}, height=${size.height}`);
                                // console.log('---'); // Separator for readability
                            }
                        } catch (error) {
                            console.error(`Error retrieving details for child element at index ${childIndex}: ${error.message}`);
                        }
                    }
                } catch (error) {
                    console.error(`Error retrieving child elements for parent element at index ${index}: ${error.message}`);
                }
            }

            // Log unique elements
            console.log("Unique TextView elements:");
            for (let key of uniqueElements) {
                console.log(`Unique Element Key: ${key}`);
            }
        }
    }
}