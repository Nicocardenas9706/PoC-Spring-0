import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../services/user.services';
import { User } from '../models/user.model';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) { }

    @Post('/signup')
    async createUser(
        @Body('password') password: string,
        @Body('username') username: string,
    ): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.usersService.createUser(
            username,
            hashedPassword,
        );
        return result;
    }
}