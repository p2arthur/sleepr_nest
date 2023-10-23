import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CurrentUser } from './users/decorators/current-user.decorator';
import { UserDocument } from './users/models/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async loginUser(@CurrentUser() currentUser: UserDocument) {
    console.log('login route');
    this.authService.login(currentUser);
  }

  @Post('/logout')
  logout() {
    return 'fodase';
  }
}
