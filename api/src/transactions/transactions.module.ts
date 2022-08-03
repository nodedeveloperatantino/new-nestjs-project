/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { TransactionsController } from './controllers/transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './entities/transaction.entity';
import { AccountEntity } from 'src/accounts/entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionEntity]),
    TypeOrmModule.forFeature([AccountEntity])
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TransactionsService]
})
export class TransactionsModule {}
