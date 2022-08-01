/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
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

    @CreateDateColumn()
    createdAt: Date; 
}