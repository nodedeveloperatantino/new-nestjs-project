/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { OperationController } from './operation.controller';
import { OperationService } from '../services/operation.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OperationEntity } from '../models/operation.entity';
import { UsersService } from '../../users/service/users.service';
import { UserEntity } from '../../users/models/user.entity';
import { AccountEntity } from '../../accounts/entities/account.entity';
import { AuthService } from '../../auth/services/auth.service';
import { JwtService } from '@nestjs/jwt';

describe('OperationController', () => {
  let controller: OperationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationController],
      providers: [OperationService, {
        provide: getRepositoryToken(OperationEntity),
        useValue: jest.fn(),
      }, UsersService, {
        provide: getRepositoryToken(UserEntity),
        useValue: jest.fn(),
      }, {
        provide: getRepositoryToken(AccountEntity),
        useValue: jest.fn(),
      }, AuthService, JwtService],
    }).compile();

    controller = module.get<OperationController>(OperationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
