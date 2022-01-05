import { MaxLength, IsNotEmpty, IsEmail, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  @ApiProperty()
  readonly password: string;
}
