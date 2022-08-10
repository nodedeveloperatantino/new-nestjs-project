/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { DigitalCurrencyController } from './digital-currency.controller';
import { DigitalCurrencyService } from '../services/digital-currency.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AccountEntity } from '../../accounts/entities/account.entity';
import { DigitalCurrency } from '../entities/digital-currency.entity';
import { OperationEntity } from '../../operation/models/operation.entity';

describe('DigitalCurrencyController', () => {
  let controller: DigitalCurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalCurrencyController],
      providers: [DigitalCurrencyService, {
        provide: getRepositoryToken(AccountEntity),
        useValue: jest.fn(),
      }, {
        provide: getRepositoryToken(DigitalCurrency),
        useValue: jest.fn(),
      }, {
        provide: getRepositoryToken(OperationEntity),
        useValue: jest.fn(),
      }],
    }).compile();

    controller = module.get<DigitalCurrencyController>(DigitalCurrencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
