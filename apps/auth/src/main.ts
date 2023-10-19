import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

async function bootstrap() {
  console.log('somethingsssss');
  const app = await NestFactory.create(AuthModule);
  await app.listen(3001);
}
bootstrap();
