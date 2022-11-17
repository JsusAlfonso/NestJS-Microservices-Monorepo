import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'staging', 'production')
          .required(),
          PORT: Joi.number().required(),
          HOST: Joi.string().hostname().required()
      })
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}
