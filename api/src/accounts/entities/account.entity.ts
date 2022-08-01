/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
    accoountBalance: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
}