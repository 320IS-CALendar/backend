import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('CALendar')
    .setDescription('The CALendar API description')
    .setVersion('1.0')
    .addTag('CALendar')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await setupSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  console.log(`App is running at port ${3000}`);
  await app.listen(3000);
}
bootstrap();
