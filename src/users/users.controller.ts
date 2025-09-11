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
import { ApiOkResponse } from '@nestjs/swagger';
import { UserResponseDto } from './dto/UserResponse.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOkResponse({ type: UserResponseDto, isArray: true })
  async getAllUsers(@Query(ValidationPipe) query: getAllUserQueryDto) {
    console.log(query.role)
    return this.userService.getAllUsers(query.role)
  }

  @Get(':id')
  @ApiOkResponse({ type: UserResponseDto })
  async getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOneUser(id)
  }

  @Post()
  @ApiOkResponse({ type: UserResponseDto })
  async createUser(@Body(ValidationPipe) user: CreateUserDto) {
    return this.userService.createUser(user)
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserResponseDto })
  async updateOneUser(@Param('id', ParseIntPipe) id: number, 
  @Body(ValidationPipe) userUpdate: UpdateUserDto
  ) {
    return this.userService.updateOneUser(id, userUpdate)
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserResponseDto })
  async deleteOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteOneUser(id)
  }
}
