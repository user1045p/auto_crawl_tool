import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobService } from '../service/job/job.service';
import { JobConfigService } from '../service/job/job.config';
import { JobDataService } from '../service/job/data.service';
import { JobProcessor } from '../service/job/job.processor';
import { FileBloomFilter } from '../service/common/utils/bloom.filter';
import { User } from '../entites/User';
import { Job } from '../entites/Job';
import { JobEntity } from '../service/job/job.entity';
import { join } from 'path';
import { CatchModule } from '../common/catch.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Job, JobEntity]), // 注册实体
    CatchModule
  ],
  providers: [
    JobService,
    JobConfigService,
    JobProcessor,
    JobDataService,
    // 加载布隆过滤器
    {
      provide: 'BLOOM_FILTER',
      useFactory: () => {
        const bloomFilterFilePath = join(process.cwd(), 'public/resources/bloomFilter.json');
        return new FileBloomFilter(bloomFilterFilePath);
      },
    }
  ],
  exports: [JobService], // 导出服务
})
export class JobModule { }