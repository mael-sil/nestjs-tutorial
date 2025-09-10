import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "DEV",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ADMIN",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "DEV",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]
    private nextId: number = 6

    getAllUser(role?: 'ADMIN' | 'DEV' | 'INTERN') {
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    getOneUser(id: number){
        return this.users.find(user => user.id === id)
    }

    createUser(user: {name: string, email: string ,role: 'ADMIN' | 'DEV' | 'INTERN'}){
        const newUser= { "id": this.nextId, ...user}
        this.nextId++
        this.users.push(newUser)

        return newUser
    }

    updateOneUser(id: number, userUpdate: {name?: string, email?: string ,role?: 'ADMIN' | 'DEV' | 'INTERN'}){
        this.users = this.users.map(user => 
            {
                if(user.id === id){
                    return {...user,...userUpdate}
                }else{
                    return user;
                }
                
            }
        )

        

        return this.getOneUser(id);
    }

    deleteOneUser(id: number){
        const removedUser = this.getOneUser(id)
        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
