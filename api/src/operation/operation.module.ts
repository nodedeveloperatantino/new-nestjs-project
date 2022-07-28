/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OperationService } from './services/operation.service';
import { OperationController } from './controllers/operation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationEntity } from './models/operation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OperationEntity])
  ],
  controllers: [OperationController],
  providers: [OperationService]
})
export class OperationModule {}
