import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        console.log(await bcrypt.hash(pass, 10));
        if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

}