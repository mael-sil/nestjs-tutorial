import { RoleEnum } from "../dto/Role.enum";

export class UserResponse{
    id: number;
    password: string;
    name: string;
    email: string;
    role: RoleEnum;
}