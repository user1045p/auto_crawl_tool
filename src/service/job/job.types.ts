import { Page } from "puppeteer";

export interface QueryParamDto {
    // 查询参数
    keyword: string;
    city: string;
    greetSentence: string;
    active: number;
    degree: string;
    experience: string;
    salary: string;
    page?: number;
    exitAccount?: string;
    phone?: string;
}

export interface BrowserSession {
    page: Page;
    cookies: string;
}

export interface ProcessOptions {
    isCrawlInfo: boolean;
    isAutoChat: boolean;
}