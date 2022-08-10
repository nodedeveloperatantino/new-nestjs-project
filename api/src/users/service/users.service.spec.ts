/* eslint-disable prettier/prettier */
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AccountEntity } from '../../accounts/entities/account.entity';
import { AuthService } from '../../auth/services/auth.service';
import { OperationEntity } from '../../operation/models/operation.entity';
import { UserEntity } from '../models/user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, {
        provide: getRepositoryToken(UserEntity),
        useValue: jest.fn(),
      }, {
        provide: getRepositoryToken(AccountEntity),
        useValue: jest.fn(),
      }, {
        provide: getRepositoryToken(OperationEntity),
        useValue: jest.fn(),
      }, AuthService, JwtService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
