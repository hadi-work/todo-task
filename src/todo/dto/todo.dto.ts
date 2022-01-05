import { MaxLength, IsNotEmpty, IsEmail, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  @ApiProperty()
  description: string;
}
