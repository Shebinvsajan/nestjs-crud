import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
  });

  const config = new DocumentBuilder()
    .setTitle('NestJS CRUD API')
    .setDescription('This is a NestJS CRUD API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 4400;
  await app.listen(port, '0.0.0.0'); // Important: bind to 0.0.0.0
  console.log(`Application is running on port ${port}`);
}
bootstrap();