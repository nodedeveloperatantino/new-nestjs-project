/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { OperationService } from './services/operation.service';
import { OperationController } from './controllers/operation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationEntity } from './models/operation.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OperationEntity]),
    UsersModule
  ],
  controllers: [OperationController],
  providers: [OperationService],
  exports: [OperationService]
})
export class OperationModule {}
