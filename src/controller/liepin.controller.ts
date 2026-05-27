import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { LiepinService } from '../service/liepin/liepin.service';
import { AutoChatDto } from '../entites/dto/AutoChatDto'
import { UserInterceptor } from '../interceptor/user.interceptor';

@Controller('liepin')
@UseInterceptors(new UserInterceptor())
export class LiepinController {
  constructor(private readonly liepinService: LiepinService) { }

  // @Get()
  // getHello(): string {
  //   return this.liepinService.getHello();
  // }

  /**
   * 自动聊天
   * @returns 
   */
  @Post('start-auto-chat')
  startAutoChat(@Body() autoChatDto: AutoChatDto) {
    this.liepinService.startAutoChat(autoChatDto);
    return 'The spider has been started.';
  }

  /**
   * 爬虫爬取岗位信息
   * @returns 
   */
  //  @Get('start-spider')
  startSpider() {
    this.liepinService.startSpider();
    return 'The spider has been started.';
  }

  /**
   * 回访聊天
   * @returns 
   */
  // @Get('rechat')
  // revisitAndChat(): string {
  //   this.liepinService.revisitAndChat();
  //   return 'The chatbot has been started.'
  // }

  /**
   * 把cookie写到文件中，页面加载完，立即发送请求获取cookie
   * @returns 
   */
  // @Get('obtain-cookie')
  // async getCurrentCookie():Promise<string>{
  //   let cookie=await this.liepinService.obtainCookieByFile();
  //   if( cookie==""){
  //     return "The cookie is empty."
  //   }
  //   return cookie;
  // }
}
