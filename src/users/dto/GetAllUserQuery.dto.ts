import { IsEnum, IsOptional } from 'class-validator';
import { RoleEnum } from './Role.enum';

export class getAllUserQueryDto {
  @IsOptional()
  @IsEnum(RoleEnum, {
    message: 'Valid role required',
  })
  role: RoleEnum;
}
