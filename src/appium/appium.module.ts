import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { JobAppiumService } from './service/job.appium.service';
import { ZhipinAppiumService } from './service/zhipin.appium.service';
import { CommonAppiumModule } from './common-appium.module';


@Module({
  imports: [ConfigModule.forRoot(),CommonAppiumModule], // 加载环境变量
  providers: [ZhipinAppiumService],
  exports: [ZhipinAppiumService], // 导出服务供其他模块使用
})
export class AppiumModule {}