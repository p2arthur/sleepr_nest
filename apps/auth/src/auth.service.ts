import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TokenPayloadInterface } from './users/interfaces/token-payload.interface';
import { UserDocument } from './users/models/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  async login(user: UserDocument) {
    console.log('login user id', user._id);
    // const tokenPayload: TokenPayloadInterface = {
    //   user_id: user._id,
    // };
  }
}
