import { IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
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
    @IsStrongPassword(
        {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }
    )
    password: string;
}