import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BossService } from '../service/boss/boss.service';
import { BossConfigService } from '../service/boss/boss.config';
import { JobProcessor } from '../service/boss/job.processor';
import { DataService } from '../service/boss/data.service';
import { User } from '../entites/User';
import { Job } from '../entites/Job';
import { BossEntity } from '../service/boss/boss.entity';
import { FileBloomFilter } from '../service/common/utils/bloom.filter';
import { CatchModule } from '../common/catch.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Job, BossEntity]), // 注册实体
    CatchModule
  ],
  providers: [
    BossService,
    BossConfigService,
    JobProcessor,
    DataService,
    // 加载布隆过滤器
    {
      provide: 'BLOOM_FILTER',
      useFactory: () => {
        const bloomFilterFilePath = join(process.cwd(), 'public/resources/bloomFilter.json');
        return new FileBloomFilter(bloomFilterFilePath);
      },
    }
  ],
  exports: [BossService, JobProcessor], // 导出服务
})
export class BossModule { }