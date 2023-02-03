import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I Am Signup' };
  }
  login() {
    return 'I Am Login';
  }
}
