export interface QueryParamDto {
  jd?: string;
  areaId?: string;
  countyId?: string;
  streetId?: string;
  degree?: string;
  experience?: string;
  jobType?: string;
  salary?: string;
  greeting?: string;
  active?: number;
  phone?: string;
  exitAccount?: string;
  size?: string;
  nature?: string;
}

export interface BrowserSession {
  page: any;
  user: any;
}

export interface ProcessOptions {
  saveInfo: boolean;
  autoChat: boolean;
}