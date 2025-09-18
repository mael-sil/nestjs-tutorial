import { createParamDecorator, ExecutionContext } from '@nestjs/common';

interface AuthenticatedRequest extends Request {
  user: {
    sub: string;
    name: string;
    email: string;
    iat?: number;
    exp?: number;
  };
}

export const UserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    return request.user?.sub;
  },
);
