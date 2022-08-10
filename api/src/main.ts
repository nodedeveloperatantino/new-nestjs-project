/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: ['error', 'warn']
  });

  // const config = new DocumentBuilder()
  //                     .setTitle('Yassir Project X')
  //                     .setDescription('This OpenAPI lists all the available APIs in this backend.')
  //                     .setVersion('0.0.0.a')
  //                     .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('/api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
