import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// ** Config
import { ConfigService } from '@nestjs/config';

// ** Pipe
import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { HttpExceptionFilter } from './filters/httpException.filter';
import { Log4jsLogger } from '@nestx-log4js/core';
import compression from 'compression';
import helmet from 'helmet';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose'],
    cors: { origin: 'http://localhost:3000' },
  });

  const configuration: ConfigService = app.get(ConfigService);

  const port = configuration.get('port');
  const projectTitle = configuration.get('projectTitle');

  const config = new DocumentBuilder()
    .setTitle(projectTitle)
    .setDescription('')
    .setVersion('1.00')
    .addServer(`http://localhost:${port}/api`)
    .build();

  SwaggerModule.setup('swagger', app, SwaggerModule.createDocument(app, config));

  app.setGlobalPrefix('api');

  app.use(compression());

  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      },
    }),
  );

  app.enableCors();

  // app.use(csurf());

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new HttpExceptionFilter(app.get(Log4jsLogger)));

  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
