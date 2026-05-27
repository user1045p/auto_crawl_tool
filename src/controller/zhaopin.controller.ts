import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { ZhaopinService } from '../service/zhaopin/zhaopin.service';
import { AutoChatDto } from '../entites/dto/AutoChatDto'
import { UserInterceptor } from '../interceptor/user.interceptor';

@Controller('zhipin')
@UseInterceptors(new UserInterceptor())
export class ZhaopinController {
  constructor(private readonly zhaopinService: ZhaopinService) { }

  /**
   * 自动聊天
   * @returns 
   */
  @Post('start-auto-chat')
  startAutoChat(@Body() autoChatDto: AutoChatDto) {
    this.zhaopinService.startAutoChat(autoChatDto);
    return 'The spider has been started.';
  }

  /**
   * 爬虫爬取岗位信息
   * @returns 
  //  */
  //  @Get('start-spider')
  // startSpider() {
  //   this.zhaopinService.startSpider();
  //   return 'The spider has been started.';
  // }

  /**
   * 回访聊天
   * @returns 
   */
  @Get('rechat')
  revisitAndChat(): string {
    this.zhaopinService.revisitAndChat();
    return 'The chatbot has been started.'
  }

}
