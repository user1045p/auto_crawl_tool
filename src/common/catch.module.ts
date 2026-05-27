import { CacheService } from './cache.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheData } from '../entites/cache';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([CacheData]),
  ],
  providers: [
    CacheService,
  ],
  exports: [
    CacheService,
  ]
})
export class CatchModule {}