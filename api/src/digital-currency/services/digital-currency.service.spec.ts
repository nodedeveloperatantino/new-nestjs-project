/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AccountEntity } from '../../accounts/entities/account.entity';
import { OperationEntity } from '../../operation/models/operation.entity';
import { DigitalCurrency } from '../entities/digital-currency.entity';
import { DigitalCurrencyService } from './digital-currency.service';

describe('DigitalCurrencyService', () => {
  let service: DigitalCurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<DigitalCurrencyService>(DigitalCurrencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
