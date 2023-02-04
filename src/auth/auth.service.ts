import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
import * as bcrypt from 'bcryptjs';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDTO) {
    try {
      // Generate Password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(dto.password, salt);

      //  Add User
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hash,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Account Already Exists!');
        }
        throw error;
      }
    }
  }
  async login(dto: AuthDTO) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) {
      throw new ForbiddenException('Invalid Credentials!');
    }
    // Compare Password
    const correct_password = await bcrypt.compare(dto.password, user.hash);
    if (!correct_password) {
      throw new ForbiddenException('Invalid Credentials!');
    }
    delete user.hash;
    return user;
  }
}
