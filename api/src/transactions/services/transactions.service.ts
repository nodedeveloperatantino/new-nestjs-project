/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable } from 'rxjs';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { TransactionEntity } from '../entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>
  ) {}
  
  create(createTransactionDto: CreateTransactionDto) : Observable<CreateTransactionDto | string> {
    const accountBalance = from(this.accountRepository.findOne({where: {accountId: createTransactionDto.from}})).pipe(
      map((account: AccountEntity) => {
        const {accountBalance, ...restObjects} = account;
        return accountBalance;
      })
    )

    if(Number(accountBalance) < createTransactionDto.amount) {
      return from('Insufficient funds.')
    }

    return from(this.transactionRepository.save(createTransactionDto));
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
