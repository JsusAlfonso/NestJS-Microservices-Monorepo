import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'USER_MICROSERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('NODE_ENV').includes('development')
            ? 'localhost'
            : 'host.com',
            port: configService.get('USER_MICROSERVICE_PORT')
          }
        })
      },
      inject: [ConfigService],
    }
  ]
})
export class UserModule {}
