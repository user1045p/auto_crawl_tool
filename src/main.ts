import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix("api");
  //使用--静态资源
  app.useStaticAssets(join(__dirname, '/public'), {
    prefix: '/static/', //设置虚拟前缀路径
    maxAge: 1000 * 60, //设置缓存时间
  });
  await app.listen(3000);
	
}
bootstrap();