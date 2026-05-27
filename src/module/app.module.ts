import { Module } from '@nestjs/common';

//前端静态页面
import { ServeStaticModule } from '@nestjs/serve-static';
import { BossController } from '../controller/boss.controller';
import { ZhaopinController } from '../controller/zhaopin.controller';
import { LiepinController } from '../controller/liepin.controller';
import { JobController } from '../controller/job.controller';
import { TaskController } from '../controller/task.controller';

import { BossService } from '../service/boss.service';
import { ZhaopinService } from '../service/zhaopin.service';
import { LiepinService } from '../service/liepin.service';
import { JobService } from '../service/job.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from '../entites/Job';
import { User } from '../entites/User';
import { JobDetail } from '../entites/JobDetail';
import { join } from 'path';
import { BossEntity } from '../service/boss/boss.entity';
import { LiepinEntity } from '../service/liepin/liepin.entity';
import { JobEntity } from '../service/job/job.entity';
import { ZhaopinEntity } from '../service/zhaopin/zhaopin.entity';
import { TaskEntity } from '../service/task/task.entity';

import { CacheData } from '../entites/cache';

import { BossModule } from './boss.module';
import { ZhaopinModule } from './zhaopin.module';
import { LiepinModule } from './liepin.module';
import { JobModule } from './job.module';
// import { AppiumModule } from './appium/appium.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from './task.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    //   TypeOrmModule.forRoot(
    //     {
    //     type: "mysql",
    //     host: "localhost",
    //     port: 3306,
    //     username: "root",
    //     password: "root",
    //     database: "boss-spider",
    //     synchronize: true,
    //     logging: false,//关闭SQL日志
    //     entities: [Job],//自动创建表结构
    //     poolSize: 10,
    //     connectorPackage: 'mysql2',
    //     extra: {
    //         authPlugin: 'sha256_password',
    //     }
    //   }
    // ),
    TypeOrmModule.forRoot({
      "type": "sqlite",
      "database": "database/job.db",
      "synchronize": true,
      "logging": false,
      "entities": [Job, User, JobDetail,BossEntity,LiepinEntity,ZhaopinEntity,JobEntity,CacheData, TaskEntity],
      "migrations": ["dist/migration/**/*.js"],
      "subscribers": ["dist/subscriber/**/*.js"]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public/dist')
    }),
    // AppiumModule
    BossModule,
    ZhaopinModule,
    LiepinModule,
    JobModule,
    TaskModule
  ],
  controllers: [BossController, ZhaopinController, LiepinController, JobController, TaskController],
  providers: [BossService, ZhaopinService, LiepinService, JobService],
})
export class AppModule {}