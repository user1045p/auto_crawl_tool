import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Page } from 'puppeteer';
import { User } from '../../entites/User';
import { setJobCookie } from '../common/config/puppeteer.config';

@Injectable()
export class JobDataService {
  constructor(
    private entityManager: EntityManager,
  ) { }

  async queryUserById(id: any): Promise<User | null> {
    try {
      const user: any = await this.entityManager.findOne(User, {
        where: { id: 1 }
      });
      if (user && user.job_cookie) {
        setJobCookie(user.job_cookie);
      }
      return user;
    } catch (error) {
      return null;
    }
  }

  async updateUser(page: Page, user: any): Promise<void> {
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
    if (!user) {
      const newUser = new User();
      newUser.username = "admin";
      newUser.password = "admin";
      newUser.phone = "12345678901";
      newUser.email = "admin@admin.com";
      newUser.last_login = "11";
      newUser.sex = "男";
      (newUser as any).job_cookie = cookieText;
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
  }
}