import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../users/entities/users.entity';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ForgotPasswordService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  public async forgotPassword(
    forgotPasswordDto: ForgotPasswordDto,
  ): Promise<any> {
    const userUpdate = await this.userRepository.findOne({
      email: forgotPasswordDto.email,
    });
    const passwordRand = Math.random()
      .toString(36)
      .slice(-8);
    userUpdate.password = bcrypt.hashSync(passwordRand, 8);
    return await this.userRepository.save(userUpdate);
  }
}
