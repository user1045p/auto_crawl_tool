import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheData } from 'src/entites/cache';
import { Repository } from 'typeorm';

@Injectable()
export class CacheService {

  private cacheMap = new Map<string, any>();

  constructor(
    @InjectRepository(CacheData)
    private readonly cacheRepository: Repository<CacheData>,
  ) { }

  async onModuleInit() {
    await this.loadCacheFromDatabase();
  }

  async loadCacheFromDatabase() {
    // 从数据库加载数据
    const cacheList = await this.cacheRepository.find();

    // 将数据存入内存缓存
    cacheList.forEach(CacheData => {
      this.cacheMap.set(CacheData.key, CacheData);
    });
  }

  getFromCache(key: string): any {
    return this.cacheMap.get(key);
  }

  getAllFromCache(): any[] {
    return Array.from(this.cacheMap.values());
  }

  async updateInCache(key: string, value: any) {
    // 更新内存中的数据
    this.cacheMap.set(key, value);
    // 更新数据库中的缓存数据
    await this.cacheRepository.createQueryBuilder()
      .update()
      .set({ value: value })
      .where({ key })
      .execute();
  }

  async saveToDatabase(entity: any) {
    // 保存新数据到数据库
    const result = await this.cacheRepository.save(entity);

    // 将数据存入内存缓存
    this.cacheMap.set(`${result.key}`, result);

    return result;
  }

  async deleteFromCache(key: string) {
    // 从内存缓存中删除
    this.cacheMap.delete(key);
    
    // 从数据库中删除
    await this.cacheRepository.delete({ key });
  }
}