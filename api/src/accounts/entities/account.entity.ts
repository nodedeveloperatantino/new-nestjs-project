/* eslint-disable prettier/prettier */
import { DigitalCurrency } from "src/digital-currency/entities/digital-currency.entity";
import { OperationEntity } from "src/operation/models/operation.entity";
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

    @OneToMany(() => TransactionEntity, transaction => transaction.account)
    transaction: TransactionEntity[];

    @OneToMany(() => OperationEntity, (operation) => operation.account)
    operation: OperationEntity[];

    @OneToMany(() => DigitalCurrency, (digitalCurrencycreatedFor) => digitalCurrencycreatedFor.createdForAccount)
    digitalCurrencycreatedFor: DigitalCurrency[];

    @OneToMany(() => DigitalCurrency, (digitalCurrencycreatedBy) => digitalCurrencycreatedBy.createdByAccount)
    digitalCurrencycreatedBy: DigitalCurrency[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
}