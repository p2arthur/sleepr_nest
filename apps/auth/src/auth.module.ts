import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { DatabaseModule } from '@app/common';
import { UserDocument } from './users/models/user.schema';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/auth.env',
    }),
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserDocument },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, ConfigService, JwtService],
})
export class AuthModule {}
