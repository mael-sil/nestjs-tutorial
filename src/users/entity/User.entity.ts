import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../dto/Role.enum";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    email: string;

    @Column()
    role: RoleEnum;

    constructor(user: Partial<User>){
        Object.assign(this, user)
    }

}