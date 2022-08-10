/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AccountEntity } from '../../accounts/entities/account.entity';
import { TransactionsController } from '../controllers/transactions.controller';
import { TransactionEntity } from '../entities/transaction.entity';
import { TransactionsService } from '../services/transactions.service';

describe('TransactionsController', () => {
  let controller: TransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [TransactionsService, {
        provide: getRepositoryToken(AccountEntity),
        useValue: jest.fn(),
      }, {
        provide: getRepositoryToken(TransactionEntity),
        useValue: jest.fn(),
      }],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
