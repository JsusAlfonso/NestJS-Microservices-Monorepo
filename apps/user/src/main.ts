
import { UserModule } from './user.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger: Logger = new Logger('User Microservice');

  const PORT: number = +process.env.USER_MICROSERVICE_PORT;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: PORT,
      },
    },
  );

  // app.useGlobalFilters(new MsErrorHandlerFilter());
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }),
  );

  await app.listen();
  logger.log(`User Microservice successfully started: [${PORT}]}`);
}
bootstrap();
