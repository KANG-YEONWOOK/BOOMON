import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 1. API prefix 추가 (선택사항)
  app.setGlobalPrefix('api');

  // 2. CORS 활성화 (필수)
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
