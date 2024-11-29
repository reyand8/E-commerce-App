import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';


async function bootstrap(): Promise<void> {
  const PORT: string | 8080 = process.env.API_PORT || 8080;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.enableShutdownHooks()

  await app.listen(PORT, (): void => {
    Logger.log(`http://localhost:${PORT}`, `Server start on host`);
  });
}

bootstrap();