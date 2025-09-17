import { Injectable, NotFoundException } from '@nestjs/common';
import { UserResponseDto } from './dto/UserResponse.dto';
import { RoleEnum } from './dto/Role.enum';
import { EntityManager, Equal } from 'typeorm';
import { User } from './entity/User.entity';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from './dto/CreateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly entityManager: EntityManager) {}

    async getAllUsers(role?: RoleEnum): Promise<UserResponseDto[]> {
        let users;
        if(role){
            users = await this.entityManager.findBy(User,{ role: Equal(role)});
        }else
        {
            users = await this.entityManager.find(User);
        }
        return plainToInstance<UserResponseDto, User[]>(UserResponseDto, users);
    }

    async getOneUser(id: number): Promise<UserResponseDto> {
        const user = this.entityManager.findOneBy(User, { id },)
        if(!user){
            throw new NotFoundException({ message: `User ${id} not found`}); 
        }
        return plainToInstance(UserResponseDto, user);
    }

    async createUser(user: CreateUserDto): Promise<UserResponseDto> {
        
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        const newUser= new User(user);
        return plainToInstance(UserResponseDto, await this.entityManager.save(newUser))
    }

    async updateOneUser(id: number, userUpdate: {name?: string, email?: string ,role?: RoleEnum}): Promise<UserResponseDto> {
        if(!await this.getOneUser(id)){
            throw new NotFoundException({ message: `User ${id} not found`}); 
        }
        const result = await this.entityManager.update(User, id, userUpdate)
        return plainToInstance(UserResponseDto, this.getOneUser(id))
    }

    async deleteOneUser(id: number): Promise<UserResponseDto> {
        const removedUser = await this.getOneUser(id)
        if(!removedUser){
            throw new NotFoundException({ message: `User ${id} not found`});
        }
        await this.entityManager.delete(User, id)
        return plainToInstance(UserResponseDto, removedUser)
    }
}
