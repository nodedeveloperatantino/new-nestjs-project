/* eslint-disable prettier/prettier */
import { AccountEntity } from "src/accounts/entities/account.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GatewayType, Status, TransactionTypes } from "../dto/create-transaction.dto";
// import { GatewayType, OperationType } from "./operation.interface";

@Entity()
export class TransactionEntity {
    @PrimaryGeneratedColumn('uuid')
    transactionId: string;

    @Column()
    from: string;

    @Column()
    to: string;

    @Column('double precision')
    amount: number;

    @Column('varchar', { length: 255 })
    description: string;

    @Column({type: 'enum', enum: TransactionTypes})
    transactionType: string;

    @Column({type: 'enum', enum: GatewayType})
    gateWay: string;

    @Column({type: 'enum', enum: Status})
    status: string;

    @ManyToOne(type => AccountEntity, accountRef => accountRef.transaction)
    account: AccountEntity;

    @CreateDateColumn()
    createdAt: Date; 
}