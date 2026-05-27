import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Page } from 'puppeteer';
import { User } from '../../entites/User';
import { setLiepinCookie } from '../common/config/puppeteer.config';

@Injectable()
export class DataService {
  constructor(
    private entityManager: EntityManager,
  ) { }

  async queryUserById(id: any): Promise<User | null> {
    try {
      const user = await this.entityManager.findOne(User, {
        where: { id: 1 }
      });
      if (user && user.liepin_cookie) {
        setLiepinCookie(user.liepin_cookie);
      }
      return user;
    } catch (error) {
      return null;
    }
  }

  async updateUser(page: Page, user: User): Promise<void> {
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
      let newUser = new User();
      newUser.id = 1;
      newUser.username = "admin";
      newUser.password = "admin";
      newUser.phone = "12345678901";
      newUser.email = "admin@admin.com";
      newUser.last_login = "11";
      newUser.sex = "男";
      newUser.liepin_cookie = cookieText;
      await this.entityManager.save(User, newUser);
    } else {
      user.liepin_cookie = cookieText;
      await this.entityManager.update(User, { id: user.id }, user);
    }
  }
}