import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // allow all origin cors
  app.enableCors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);

  console.log(`🚀 Server is running on http://localhost:${port}`);
}
bootstrap();
