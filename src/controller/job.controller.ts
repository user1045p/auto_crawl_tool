import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { JobService } from '../service/job/job.service';
import { AutoChatDto } from '../entites/dto/AutoChatDto'
import { UserInterceptor } from '../interceptor/user.interceptor';

@Controller('job')
@UseInterceptors(new UserInterceptor())
export class JobController {
  constructor(private readonly jobService: JobService) { }

  /**
   * 自动聊天
   * @returns 
   */
  @Post('start-auto-chat')
  startAutoChat(@Body() autoChatDto: AutoChatDto) {
    this.jobService.startAutoChat(autoChatDto);
    return 'The spider has been started.';
  }

  /**
   * 爬虫爬取岗位信息
   * @returns 
  //  */
  //  @Get('start-spider')
  // startSpider() {
  //   this.jobService.startSpider();
  //   return 'The spider has been started.';
  // }

  /**
   * 回访聊天
   * @returns 
   */
  @Get('rechat')
  revisitAndChat(): string {
    this.jobService.revisitAndChat();
    return 'The chatbot has been started.'
  }

}
