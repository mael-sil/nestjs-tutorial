import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { RoleEnum } from './Role.enum'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail({},{
        message: "Invalid email format"
    })   
    email: string;

    @IsEnum(RoleEnum,
        {
            message: "Valid role required"
        }
    )
    role: RoleEnum;

    @IsString()
    password: string;
}