/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DigitalCurrencyService } from './services/digital-currency.service';
import { DigitalCurrencyController } from './controllers/digital-currency.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DigitalCurrency } from './entities/digital-currency.entity';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { OperationEntity } from '../operation/models/operation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DigitalCurrency]),
    TypeOrmModule.forFeature([OperationEntity]),
    TypeOrmModule.forFeature([AccountEntity]),
  ],
  controllers: [DigitalCurrencyController],
  providers: [DigitalCurrencyService]
})
export class DigitalCurrencyModule {}
