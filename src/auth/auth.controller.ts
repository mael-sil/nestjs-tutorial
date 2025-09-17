import { Body, Controller, Get, ValidationPipe } from '@nestjs/common';
import { SignInDto } from './dto/SignIn.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('login')
    async signIn(@Body(ValidationPipe) signInDto: SignInDto){
        return this.authService.signIn(signInDto);
    }
}
