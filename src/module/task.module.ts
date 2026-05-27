import { Module } from '@nestjs/common';
import { TaskModule as TaskServiceModule } from '../service/task/task.module';
import { CrawlerTaskService } from '../service/task/crawler.task.service';
import { BossModule } from './boss.module';
import { ZhaopinModule } from './zhaopin.module';
import { LiepinModule } from './liepin.module';
import { JobModule } from './job.module';

@Module({
  imports: [
    TaskServiceModule,
    BossModule,
    ZhaopinModule,
    LiepinModule,
    JobModule,
  ],
  providers: [CrawlerTaskService],
  exports: [TaskServiceModule],
})
export class TaskModule {}