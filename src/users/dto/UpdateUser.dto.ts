import { CreateUserDto } from "./CreateUser.dto";
import { PartialType } from "@nestjs/swagger"

export class UpdateUserDto extends PartialType(CreateUserDto) {} 