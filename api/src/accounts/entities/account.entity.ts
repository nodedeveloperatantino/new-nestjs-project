/* eslint-disable prettier/prettier */
import { TransactionEntity } from "src/transactions/entities/transaction.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { GatewayType, OperationType } from "./operation.interface";

@Entity()
export class AccountEntity {
    @PrimaryGeneratedColumn('uuid')
    accountId: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    emailId: string;

    @Column()
    phoneNumber: string;

    @Column({type: 'double precision', default: 0.00})
    accountBalance: number;

    @OneToMany(type => TransactionEntity, transaction => transaction.account)
    transaction: TransactionEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
}