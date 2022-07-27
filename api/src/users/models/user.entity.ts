import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user.interface";

@Entity() 
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({unique: true})
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({type: 'enum', enum: UserRole, default: UserRole.USER})
    role: UserRole

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }


}