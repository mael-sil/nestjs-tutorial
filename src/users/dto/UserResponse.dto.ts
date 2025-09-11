import { Exclude } from "class-transformer";
import { RoleEnum } from "./Role.enum";

export class UserResponseDto{
    @Exclude()
    id: number;
    
    name: string;
    email: string;
    role: RoleEnum;
}