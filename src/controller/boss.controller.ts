import { Controller, Get, Query, Post, Body, UseInterceptors, Sse, MessageEvent } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BossService } from '../service/boss/boss.service';
import { AutoChatDto } from '../entites/dto/AutoChatDto';
import { UserInterceptor } from '../interceptor/user.interceptor';
import { BossEntity } from '../service/boss/boss.entity';

@Controller('boss')
@UseInterceptors(new UserInterceptor())
export class BossController {
  constructor(private readonly bossService: BossService) { }

  @Get()
  getHello(): string {
    console.log("开始测试");

    // sendChatRequest("什么是圆周率？");
    return "";
  }

  @Sse('events')
  sse(): Observable<MessageEvent> {
    // 创建一个Observable来处理SSE连接
    return new Observable(observer => {
      // 发送初始连接消息
      observer.next({
        data: { message: 'Connected to job events' }
      });

      // 监听新增职位事件
      const jobAddedHandler = (job: BossEntity) => {
        observer.next({
          data: job
        });
      };

      // 订阅事件
      this.bossService.jobAddedEvent.on('jobAdded', jobAddedHandler);

      // 返回清理函数
      return () => {
        this.bossService.jobAddedEvent.removeListener('jobAdded', jobAddedHandler);
      };
    });
  }

  @Get('list')
  async findAllHistory(
    @Query('position') position?: string,
    @Query('company') company?: string,
    @Query('status') status?: string,
    @Query('page') page?: number,
    @Query('pageSize') pageSize?: number,
  ) {
    return this.bossService.findAllHistory({
      position,
      company,
      status,
      page,
      pageSize
    });
  }


  /**
   * 自动聊天
   * @returns 
   */
  @Post('start-auto-chat')
  startAutoChat(@Body() autoChatDto: AutoChatDto) {
    //把autoChatDto转换到QueryParamDto里面
    this.bossService.startAutoChat(autoChatDto);
    return 'The spider has been started.';
  }

  /**
   * 爬虫爬取岗位信息
   * @returns 
   */
  //  @Get('start-spider')
  startSpider() {
    // this.bossService.startSpider();
    return 'The spider has been started.';
  }

  /**
   * 回访聊天
   * @returns 
   */
  // @Get('rechat')
  revisitAndChat(): string {
    // this.bossService.revisitAndChat();
    return 'The chatbot has been started.'
  }

  /**
   * 把cookie写到文件中，页面加载完，立即发送请求获取cookie
   * @returns 
   */
  @Get('obtain-cookie')
  async getCurrentCookie(): Promise<string> {
    // let cookie=await this.bossService.obtainCookieByFile();
    // if( cookie==""){
    //   return "The cookie is empty."
    // }
    // return cookie;
    return null;
  }
}