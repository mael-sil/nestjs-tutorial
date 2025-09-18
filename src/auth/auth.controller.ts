import {
  Body,
  Controller,
  Get,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { SignInDto } from './dto/SignIn.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsersService } from 'src/users/users.service';
import { UserResponseDto } from 'src/users/dto/UserResponse.dto';
import { UserId } from 'src/users/decorator/UserId.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Get('login')
  async signIn(@Body(ValidationPipe) signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  async userInfo(@UserId() userId: number): Promise<UserResponseDto> {
    return this.userService.getOneUser(userId);
  }
}
