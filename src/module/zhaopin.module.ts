import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZhaopinService } from '../service/zhaopin/zhaopin.service';
import { ZhaopinConfigService } from '../service/zhaopin/zhaopin.config';
import { ZhaopinDataService } from '../service/zhaopin/data.service';
import { ZhaopinJobProcessor } from '../service/zhaopin/job.processor';
import { FileBloomFilter } from '../service/common/utils/bloom.filter';
import { User } from '../entites/User';
import { Job } from '../entites/Job';
import { JobDetail } from '../entites/JobDetail';
import { join } from 'path';
import { CatchModule } from '../common/catch.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Job, JobDetail]), // 注册实体
    CatchModule
  ],
  providers: [
    ZhaopinService,
    ZhaopinConfigService,
    ZhaopinJobProcessor,
    ZhaopinDataService,
    // 加载布隆过滤器
    {
      provide: 'BLOOM_FILTER',
      useFactory: () => {
        const bloomFilterFilePath = join(process.cwd(), 'public/resources/bloomFilter.json');
        return new FileBloomFilter(bloomFilterFilePath);
      },
    }
  ],
  exports: [ZhaopinService], // 导出服务
})
export class ZhaopinModule { }