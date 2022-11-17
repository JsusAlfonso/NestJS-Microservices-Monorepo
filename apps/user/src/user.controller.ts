import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientMessage } from 'libs/helpers/src';
import { UserDTO } from 'libs/dtos/src';

@Controller() //microservice
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(ClientMessage.FindAll)
  findAll(): string {
    return this.userService.findAll();
  }

  @MessagePattern(ClientMessage.Create)
  create(@Payload() userDTO: UserDTO): UserDTO {
    return this.userService.create(userDTO);
  }

  @MessagePattern(ClientMessage.Update)
  update(@Payload() payload: any): string {    
    const { id } = payload;
    let userDto: UserDTO = payload.userDTO;
    return this.userService.update(id, userDto);
  }

  @MessagePattern(ClientMessage.Remove)
  delete(@Payload() payload: any): string {
    const { id } = payload;
    let userDto: UserDTO = payload.userDTO;
    return this.userService.delete(id, userDto);
  }
}
