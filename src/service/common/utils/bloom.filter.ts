
import * as path from 'path';
import { createHash } from 'crypto'; // 导入crypto模块
const fs = require('fs');
import { BloomFilter } from 'bloom-filters';

export class FileBloomFilter {

  private bloomFilter: any;
  private filePath: string;
  private isInitialized = false;

  constructor(filterFilePath: string) {
    this.filePath = filterFilePath;
  }

  async initialize() {
    if (this.isInitialized) return;
    
    try {
      const dir = path.dirname(this.filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      if (fs.existsSync(this.filePath)) {
        const data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
        this.bloomFilter = BloomFilter.fromJSON(data);
        console.log('已从文件中加载布隆过滤器');
      } else {
        // 初始化布隆过滤器：2000000容量，0.01误判率
        this.bloomFilter = new BloomFilter(2000000, 10);
        console.log('创建新的布隆过滤器');
      }
      this.isInitialized = true;
    } catch (error) {
      throw new Error('布隆过滤器初始化失败');
    }
  }

  async save() {
    if (!this.isInitialized) return;
    
    try {
      const data = this.bloomFilter.saveAsJSON();
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('保存布隆过滤器失败:', error);
    }
  }

  async checkDuplicate(jobKey: string): Promise<boolean> {
    if (!this.isInitialized) {
      await this.initialize();
    }
    const HashKey = this.generateMD5(jobKey); // 生成MD5摘要
    const isDuplicate = this.bloomFilter.has(HashKey);
    console.log('检查岗位是否重复:', jobKey, '结果:', isDuplicate? '重复' : '不重复');
    if (!isDuplicate) {
      this.bloomFilter.add(HashKey);
      await this.save(); // 每次添加新项后保存
    }
    return isDuplicate;
  }

  generateMD5(text: string): string {
      const hash = createHash('md5');
      hash.update(text);
      return hash.digest('hex');
  }
}