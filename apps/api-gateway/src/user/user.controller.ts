import { UserDTO } from 'libs/dtos/src';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';

@ApiTags('Usuarios')
@Controller('user') //Api-gateway Swagger
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: 201, type: [UserDTO]})
  @ApiResponse({ status: 400, description: 'Bad Request'})
  @ApiOperation({summary: 'Obtiene la información de los usuarios creados en la base de datos.'})
  @Get()
  findAll(): Promise<string> {
    return this.userService.findAll();
  }

  @ApiResponse({ status: 201, type: UserDTO})
  @ApiResponse({ status: 400, description: 'Bad Request'})
  @ApiOperation({summary: 'Crea un nuevo usuario en la base de datos.'})
  @Post()
  create(@Body() userDTO: UserDTO): Promise<UserDTO> {
    return this.userService.create(userDTO);
  }

  @ApiResponse({ status: 201, description: 'Se actualizo el usuario'})
  @ApiResponse({ status: 400, description: 'Bad Request'})
  @ApiOperation({summary: 'Actualiza un usuario en la base de datos.'})
  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() userDTO: UserDTO
  ): Promise<string> {
    return this.userService.update({id, userDTO});
  }

  @ApiResponse({ status: 201, description: 'Se elimino el usuario'})
  @ApiResponse({ status: 400, description: 'Bad Request'})
  @ApiOperation({summary: 'Elimina un usuario de la base de datos.'})
  @Delete('/:id')
  delete(
    @Param('id') id: string,
    @Body() userDTO: UserDTO
  ): Promise<string> {
    return this.userService.delete({id, userDTO});
  }

}
