/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GatewayType, OperationType } from "./operation.interface";

@Entity()
export class OperationEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    createdBy: string;

    @Column()
    digitalAmountCreated: number;

    @Column({type: 'enum', enum: OperationType})
    operationType: OperationType;

    @Column({type: 'enum', enum: GatewayType})
    gatewayType: GatewayType;

    @Column()
    referenceId: string;
}