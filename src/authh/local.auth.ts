import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local'
import { UserService } from 'src/users/services/user.services';



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.userService.findUserByUsername(username);

    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }

    return user;
  }
}