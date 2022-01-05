import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  readonly id: number;

  @IsString()
  @MaxLength(30)
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(40)
  @ApiProperty()
  readonly username: string;

  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  @ApiProperty()
  password: string;
}
