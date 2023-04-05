import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { UserService } from 'src/users/services/user.services';
import { UserController } from 'src/users/controllers/user.controller';
import { User, UserSchema } from '../models/user.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}