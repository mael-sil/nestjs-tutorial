import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/SignIn.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async signIn(signInDto: SignInDto){
        const user = await this.userService.getOneUserByMail(signInDto.email);
        const hash = user.password;
        
        const isMatch = await bcrypt.compare(signInDto.password, hash);
        if(!isMatch){
            throw new UnauthorizedException();
        }
        
        // to do: generate and return a JWT token
        return { auth: true };
    }
}
