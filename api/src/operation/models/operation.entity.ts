/* eslint-disable prettier/prettier */
import { UserEntity } from "src/users/models/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OperationType } from "./operation.interface";

@Entity()
export class OperationEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'enum', enum: OperationType})
    operationType: OperationType;

    @ManyToOne(type => UserEntity, userRef => userRef.operationRef)
    userRef: UserEntity;

    @CreateDateColumn()
    createdDate: Date;
}