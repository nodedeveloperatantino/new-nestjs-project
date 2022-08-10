/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Operation } from '../entities/operation.entity';
import { OperationEntity } from '../models/operation.entity';
import { OperationService } from './operation.service';

describe('OperationService', () => {
  let service: OperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationService, {
        provide: getRepositoryToken(OperationEntity),
        useValue: jest.fn(),
      }],
    }).compile();

    service = module.get<OperationService>(OperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
