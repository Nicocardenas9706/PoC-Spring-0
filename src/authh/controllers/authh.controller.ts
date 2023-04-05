import { Controller, Request, Post, UseGuards, HttpCode,
     HttpStatus, Body, 
     UnauthorizedException} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from 'src/users/DTO/login.dto';
import { UserService } from 'src/users/services/user.services';
import { AuthService } from '../services/authh.service';

@Controller()
  export class AuthController { 
    constructor(
      private authService: AuthService,
      private userService: UserService,
    ) {} 

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('local'))
    async login(@Body() loginDto: LoginDto) {
      const user = await this.userService.findUserByUsername(loginDto.username);
  
      if (!user) {
        throw new UnauthorizedException();
      }
  
      return this.authService.login(user);
    }
  }