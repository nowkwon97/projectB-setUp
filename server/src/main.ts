import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import path, { join } from 'path';
import * as express from 'express'; // 추가
// import * as path from 'path'; // 추가

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // 정적 파일 제공 설정 추가
  // app.use(
  //   '/static',
  //   express.static(path.join(__dirname, '../../client/public')),
  // );

  await app.listen(3000);
}
bootstrap();
