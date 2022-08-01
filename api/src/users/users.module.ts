/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AccountsModule } from 'src/accounts/accounts.module';
import { OperationModule } from 'src/operation/operation.module';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { OperationEntity } from 'src/operation/models/operation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([AccountEntity]),
    TypeOrmModule.forFeature([OperationEntity]),
    AuthModule,
    AccountsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
