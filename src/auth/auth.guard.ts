import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

interface JwtPayload {
  sub: string;
  name: string;
  email: string;
  iat?: number;
  exp?: number;
}

interface RequestWithUser extends Request {
  user: {
    sub: string;
    name: string;
    email: string;
    iat?: number;
    exp?: number;
  };
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const token = this.extractBearerToken(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret: `${process.env.JWT_SECRET}`,
      });

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  extractBearerToken(request: Request): string | undefined {
    try {
      return request.headers.authorization?.split(' ')[1];
    } catch {
      throw new UnauthorizedException();
    }
  }
}
