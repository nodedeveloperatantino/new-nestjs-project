/* eslint-disable prettier/prettier */
import { AccountEntity } from "src/accounts/entities/account.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CurrencyCode } from "../dto/CurrencyCode.enum";

export enum PaymentMode {
    ONLINE = 'ONLINE',
    CASH = 'CASH',
    BANK_TRANSFER = 'BANK_TRANSFER'
}

export enum OperationName {
    CREATED = 'CREATED',
    DESTROYED = 'DESTROYED'
}

export enum PaymentStatus {
    PENDING = 'PENDING',            // It signifies that the digital currency has been created but not transferred to the account of the customer.
    SUCCESS = 'SUCCESS',            // It signifies that the digital currency has been created and transferred to the customer as well. The change in amount must reflect in the transaction table in the database.
    CANCELLED = 'CANCELLED'         // Customer didn't pay or the creation has been destroyed.
}

@Entity()
export class DigitalCurrency {
    @PrimaryGeneratedColumn('uuid')
    referenceNumber: string;

    @Column('double precision')
    amount: number;

    @Column({type: 'enum', enum: OperationName})
    operationName: OperationName;

    @ManyToOne(() => AccountEntity, createdForAccount => createdForAccount.digitalCurrencycreatedFor)
    createdForAccount: AccountEntity;

    @ManyToOne(() => AccountEntity, createdForAccount => createdForAccount.digitalCurrencycreatedBy)
    createdByAccount: AccountEntity;

    @Column({type: 'enum', enum: PaymentMode, default: null})
    paymentMode: string;

    @Column({type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING})
    paymentStatus: string;          // This signifies that whether the payment has been done to Yassir or not.

    @Column({type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING})
    transactionStatus: string;      // This signifies that the amount has been transferred to the corresponding payee or not.

    @Column({type: 'enum', enum: CurrencyCode, default: CurrencyCode.INR})
    currencyCode: CurrencyCode;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}


