import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { RoleEnum } from './dto/Role.enum';
import { getAllUserQueryDto } from './dto/GetAllUserQuery.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUser(@Query(ValidationPipe) query: getAllUserQueryDto) {
    console.log(query.role)
    return this.userService.getAllUser(query.role)
  }

  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOneUser(id)
  }

  @Post()
  createUser(@Body(ValidationPipe) user: CreateUserDto) {
    return this.userService.createUser(user)
  }

  @Patch(':id')
  updateOneUser(@Param('id', ParseIntPipe) id: number, 
  @Body(ValidationPipe) userUpdate: UpdateUserDto
  ) {
    return this.userService.updateOneUser(id, userUpdate)
  }

  @Delete(':id')
  deleteOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteOneUser(id)
  }
}
