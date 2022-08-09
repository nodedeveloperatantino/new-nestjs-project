/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// import { databaseProvider } from './database.provider';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OperationModule } from './operation/operation.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { DigitalCurrencyModule } from './digital-currency/digital-currency.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      logging: ['query', 'error']
    }),
    UsersModule,
    AuthModule,
    OperationModule,
    TransactionsModule,
    AccountsModule,
    DigitalCurrencyModule
  ],
  controllers: [AppController],
  providers: [AppService, /* ...databaseProvider */],
  // exports: [...databaseProvider]
})
export class AppModule {}
