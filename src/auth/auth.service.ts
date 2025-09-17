import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/SignIn.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

    async signIn(signInDto: SignInDto){
        const user = await this.userService.getOneUserByMail(signInDto.email);
        const hash = user.password;
        
        const isMatch = await bcrypt.compare(signInDto.password, hash);
        if(!isMatch){
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, name: user.name, email: user.email };
        return { access_token: await this.jwtService.signAsync(payload) };
    }
}
