import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../users/services/user.services';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/users/module/user.module';
import { LocalStrategy } from './local.auth';
import { AuthController } from './controllers/authh.controller';
import { AuthService } from './services/authh.service';

@Module({
  imports: [UserModule, PassportModule,
    MongooseModule.forFeature([{ name: "user", schema: UserSchema }]),
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserService],
})
export class AuthModule {}
