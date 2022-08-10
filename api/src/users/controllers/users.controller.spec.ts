/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../service/users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { AccountEntity } from '../../accounts/entities/account.entity';
import { OperationEntity } from '../../operation/models/operation.entity';
import { AuthService } from '../../auth/services/auth.service';
import { JwtService } from '@nestjs/jwt';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
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

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
