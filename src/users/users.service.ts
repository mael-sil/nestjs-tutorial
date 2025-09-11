import { Injectable, NotFoundException } from '@nestjs/common';
import { UserResponseDto } from './dto/UserResponse.dto';
import { RoleEnum } from './dto/Role.enum';

@Injectable()
export class UsersService {
    private users : UserResponseDto[] = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": RoleEnum.DEV,
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": RoleEnum.INTERN,
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": RoleEnum.ADMIN,
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": RoleEnum.ADMIN,
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": RoleEnum.DEV,
        }
    ]
    private nextId: number = 6

    getAllUser(role?: 'ADMIN' | 'DEV' | 'INTERN'): UserResponseDto[] {
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    getOneUser(id: number): UserResponseDto{
        const returnUser = this.users.find(user => user.id === id)
        if(!returnUser){
            throw new NotFoundException(`User ${id} not found`)
        }
        return returnUser
    }

    createUser(user: {name: string, email: string ,role: RoleEnum}): UserResponseDto{
        const newUser= { "id": this.nextId, ...user}
        this.nextId++
        this.users.push(newUser)

        return newUser
    }

    updateOneUser(id: number, userUpdate: {name?: string, email?: string ,role?: RoleEnum}): UserResponseDto{
        const updatedUser = this.getOneUser(id);
        
        this.users = this.users.map(user => 
            {
                if(user.id === id){
                    return {...user,...userUpdate}
                }else{
                    return user;
                }
                
            }
        )

        return updatedUser
    }

    deleteOneUser(id: number): UserResponseDto{
        const removedUser = this.getOneUser(id)
        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
