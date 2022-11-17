import { Injectable } from '@nestjs/common';
import { UserDTO } from '../../../libs/dtos/src/user/user.dto';

@Injectable()
export class UserService {
  findAll(): string {
    return 'Hello World!';
  }

  create(userDTO: UserDTO): UserDTO {
    return userDTO ;
  }

  update(id: string, userDTO: UserDTO): string {  
    return `se actualizo el usuario ${userDTO.name}, con el id ${id}` ;
  }

  delete(id: string, userDTO: UserDTO): string {
    return `se elimino el usuario ${userDTO.name}, con el id ${id}` ;
  }
}
