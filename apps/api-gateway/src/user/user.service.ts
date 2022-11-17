import { UserDTO } from 'libs/dtos/src';
import { ClientMessage } from 'libs/helpers/src';
import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @Inject ('USER_MICROSERVICE') private readonly userMicroservice: ClientProxy
  ) {}
  
  findAll(): Promise<string> {
    return this.userMicroservice.send(ClientMessage.FindAll, {}).toPromise();
  }

  create(userDTO: UserDTO): Promise<UserDTO> {
    return this.userMicroservice.send(ClientMessage.Create, userDTO).toPromise();
  }

  update(userDTO: any): Promise<string> {
    return this.userMicroservice.send(ClientMessage.Update, userDTO).toPromise();
  }

  delete(userDTO: any): Promise<string> {
    return this.userMicroservice.send(ClientMessage.Remove, userDTO).toPromise();
  }
}
