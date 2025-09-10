import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUser() {
    return [];
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createUser(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  updateOneUser(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  deleteOneUser(@Param('id') id: string) {
    return { id };
  }
}
