import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiepinService } from '../service/liepin/liepin.service';
import { LiepinConfigService } from '../service/liepin/liepin.config';
import { DataService } from '../service/liepin/data.service';
import { JobProcessor } from '../service/liepin/job.processor';
import { FileBloomFilter } from '../service/common/utils/bloom.filter';
import { User } from '../entites/User';
import { Job } from '../entites/Job';
import { LiepinEntity } from '../service/liepin/liepin.entity';
import { join } from 'path';
import { CatchModule } from '../common/catch.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Job, LiepinEntity]), // 注册实体
    CatchModule
  ],
  providers: [
    LiepinService,
    LiepinConfigService,
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
  exports: [LiepinService], // 导出服务
})
export class LiepinModule { }