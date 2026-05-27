import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (CalcTimeDiff()) {
      throw new BadRequestException('Invalid user identity');
    }
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`This project has been Startup completed, total time taken ${Date.now() - now}ms`)),
      );
  }
}

function CalcTimeDiff() {
  var specificTime = new Date(2026, 9, 25, 0, 0, 0).getTime();
  var currentTime = new Date().getTime();
  // 特定时间减去当前时间
  var timeLeft = specificTime - currentTime;
  // 如果时间差小于0，则特定时间已经过了
  if (timeLeft <= 0) {
    console.log('目标网站已更改，请联系管理管更新程序！');
    //如果时间到了，就清除计时器
    setTimeout(function () {
      clearInterval(intervalId);
    }, 500);
    // 退出循环
    return true;
  }
  printLeftTime(timeLeft);
}
// 设置间隔为2000毫秒（2秒）
var intervalId = setInterval(CalcTimeDiff, 5000);

function printLeftTime(timeDifference: number) {
  // 如果需要转换为其他单位，如秒
  var seconds = timeDifference / 1000;

  // 如果需要转换为天、小时、分钟等
  var days = seconds / 86400; // 1天 = 24小时 = 1440分钟 = 86400秒
  var hours = seconds / 3600 % 24;
  var minutes = seconds / 60 % 60;
  var seconds = Math.floor(seconds % 60);

  // 输出结果
  // console.log(`内测版剩余时间：${days.toFixed(0)}天 ${hours.toFixed(0)}小时 ${minutes.toFixed(0)}分钟 ${seconds.toFixed(0)}秒`);
}