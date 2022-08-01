/* eslint-disable prettier/prettier */
import { AccountEntity } from "src/accounts/entities/account.entity";
import { OperationEntity } from "src/operation/models/operation.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({type: 'enum', enum: UserRole, default: UserRole.CUSTOMER})
    role: UserRole

    @OneToOne(type => AccountEntity) @JoinColumn()
    account: AccountEntity

    @OneToMany(type => OperationEntity, operationRef => operationRef.userRef)
    operationRef: OperationEntity[];

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }


}