// 网站配置信息
export let BOSS_COOKIE = '';

export let ZHAOPIN_COOKIE = '';

export let LIEPIN_COOKIE = '';

export let JOB_COOKIE = '';

//存boss网站Cookie的域名（注意不是www.zhipin.com）
export const BOSS_DOMAIN = '.zhipin.com';

// 存放智联招聘的Cookie的域名（注意不是www.zhaopin.com）
export const ZHAOPIN_DOMAIN = '.zhaopin.com';

//存猎聘网站Cookie的域名（注意不是www.liepin.com）
export const LIEPIN_DOMAIN = '.liepin.com';

// 存放前程无忧的Cookie的域名（注意不是www.zhaopin.com）
export const JOB_DOMAIN = '.51job.com';

export const BOOS_URL = 'https://www.zhipin.com/wapi/zppassport/get/zpToken?v2=' + (new Date).getTime();
      
export const ZHAOPIN_URL = 'https://i.zhaopin.com/resume';

export const LIEPIN_URL = 'https://c.liepin.com/resume/edit';

export const JOB_URL = 'https://i.51job.com/resume/standard_resume.php';

/**
 * 设置BOSS直聘的Cookie值
 * @param cookieValue 新的Cookie值
 */
export function setBossCookie(cookieValue: string) {
    BOSS_COOKIE = cookieValue;
}

/**
 * 设置BOSS直聘的Cookie值
 * @param cookieValue 新的Cookie值
 */
export function setZhaopinCookie(cookieValue: string) {
    ZHAOPIN_COOKIE = cookieValue;
}

/**
 * 设置BOSS直聘的Cookie值
 * @param cookieValue 新的Cookie值
 */
export function setLiepinCookie(cookieValue: string) {
    LIEPIN_COOKIE = cookieValue;
}

/**
 * 设置BOSS直聘的Cookie值
 * @param cookieValue 新的Cookie值
 */
export function setJobCookie(cookieValue: string) {
    JOB_COOKIE = cookieValue;
}