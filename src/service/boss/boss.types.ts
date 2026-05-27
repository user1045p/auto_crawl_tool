import { Page } from 'puppeteer';
import { User } from '../../entites/User';

// 职位数据接口
export interface JobData {
  company: {
    name: string;
  };
  job: {
    name: string;
    area: string;
    salary: string;
    tag_list: string;
    info_info: string;
  };
  link: string;
}

// 职位处理选项
export interface ProcessOptions {
  saveInfo: boolean;
  autoChat: boolean;
  startupAI: boolean;
}

// 浏览器会话
export interface BrowserSession {
  page: Page;
  user?: User;
}

// 查询参数
export interface QueryParamDto {
  jd: string;
  areaId: string;
  countyId: string;
  streetId: string;
  degree: string;
  experience: string;
  jobType: string;
  salary: string;
  greeting: string;
  active: number;
  phone: string;
  exitAccount: string;
  //=====智联=======
  size: string;
  nature: string;
}

