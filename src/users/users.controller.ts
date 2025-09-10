import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUser(@Query('role') role?: 'ADMIN' | 'DEV' | 'INTERN') {
    return this.userService.getAllUser(role)
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.userService.getOneUser(+id)
  }

  @Post()
  createUser(@Body() user: {name: string, email: string ,role: 'ADMIN' | 'DEV' | 'INTERN'}) {
    return this.userService.createUser(user)
  }

  @Patch(':id')
  updateOneUser(@Param('id') id: string, 
  @Body() userUpdate: {name?: string, email?: string ,role?: 'ADMIN' | 'DEV' | 'INTERN'}
  ) {
    return this.userService.updateOneUser(+id, userUpdate)
  }

  @Delete(':id')
  deleteOneUser(@Param('id') id: string) {
    return this.userService.deleteOneUser(+id)
  }
}
