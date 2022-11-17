import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ApiGatewayModule } from './api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  let app: any = await NestFactory.create(ApiGatewayModule);
  const logger: Logger = new Logger('Api-Gateway');
  const configService: ConfigService = app.get(ConfigService);
  const PORT = configService.get('API_GATEWAY_PORT');
  const title: string = configService.get('APP_NAME')
  ? `${configService.get('APP_NAME')} API`
  : `Documentacion de API`;
  app.enableCors();
  app.use(bodyParser.json({limit: '500mb'}));
  app.use(bodyParser.urlencoded({limit: '500mb', extended: true}))

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false
    }) 
  );

  // app.setGlobalPrefix('/v1');

  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle(title.toString())
  .setVersion('0.0.1')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);

  logger.log(`Api-Gateway succefully started: [${PORT}] `);
}
bootstrap();
