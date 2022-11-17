import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsEmail, IsString, IsNumber, IsOptional, IsDateString } from "class-validator";

enum SexEnum {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
}

export class UserDTO {
   @IsString()
   @ApiProperty({
      type: String,
      required: true,
      example: 'Example name'
   })
   name: string;

   @IsString()
   @ApiProperty({
      type: String,
      required: true,
      example: 'firstname'
    })
   firstName: string;

   @IsString()
   @IsOptional()
   @ApiProperty({
    type: String,
    required: true,
    example: 'lastname'
  })
   lastName: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    type: String,
    required: true,
    example: 'example@example.com'
  })
  email: string;

  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    example: 25
  })
  age: number;

  @IsEnum(SexEnum, {each: true})
  @ApiProperty({
    type: String,
    required: true,
    example: 'MAN'
  })
  sex: SexEnum;

  @IsDateString()
  @ApiProperty({
    type: Date,
    required: true,
  })
  dateBirth: Date | string;

}