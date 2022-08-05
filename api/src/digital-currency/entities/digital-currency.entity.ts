/* eslint-disable prettier/prettier */
import { AccountEntity } from "src/accounts/entities/account.entity";
import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class DigitalCurrency {
    @PrimaryGeneratedColumn('uuid')
    referenceNumber: string;

    @Column('float64')
    amountCreated: number;

    @ManyToOne(() => AccountEntity)
    @JoinColumn({name: 'accountId', referencedColumnName: 'accountId'})
    createdFor: AccountEntity;

    @ManyToOne(() => AccountEntity)
    @JoinColumn({name: 'accountId', referencedColumnName: 'accountId'})
    createdBy: AccountEntity;

    @Column({type: 'enum'})
    paymentMode: string;

    @Column({type: 'enum'})
    paymentStatus: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
