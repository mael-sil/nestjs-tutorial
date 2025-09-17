import { Exclude } from "class-transformer";
import { RoleEnum } from "./Role.enum";

export class UserResponseDto{
    @Exclude()
    id: number;

    @Exclude()
    password: string;
    
    name: string;
    email: string;
    role: RoleEnum;
}