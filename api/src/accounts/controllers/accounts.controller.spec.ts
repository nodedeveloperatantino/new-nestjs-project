/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AccountsController } from './accounts.controller';
import { AccountsService } from '../services/accounts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AccountEntity } from '../entities/account.entity';

describe('AccountsController', () => {
  let controller: AccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [AccountsService, {
        provide: getRepositoryToken(AccountEntity),
        useValue: jest.fn(),
      }],
    }).compile();

    controller = module.get<AccountsController>(AccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
