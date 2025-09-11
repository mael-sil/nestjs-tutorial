import { RoleEnum } from "./Role.enum";

export class UserResponseDto{
    id: number;
    name: string;
    email: string;
    role: RoleEnum;
}