/* eslint-disable prettier/prettier */
import { AccountEntity } from "src/accounts/entities/account.entity";
import { UserEntity } from "src/users/models/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OperationType } from "./operation.interface";

@Entity()
export class OperationEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'enum', enum: OperationType})
    operationType: OperationType;

    @ManyToOne(() => AccountEntity)
    @JoinColumn({name: 'accountId', referencedColumnName: 'accountId'})
    account: AccountEntity;

    @CreateDateColumn()
    createdDate: Date;
}