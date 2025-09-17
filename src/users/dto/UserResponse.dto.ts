import { Exclude } from "class-transformer";
import { RoleEnum } from "./Role.enum";
import { UserResponse } from "../model/UserResponse";

export class UserResponseDto extends UserResponse{
    @Exclude()
    declare  id: number;

    @Exclude()
    declare password: string;
}