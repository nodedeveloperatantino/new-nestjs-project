/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable } from 'rxjs';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { Operation } from 'src/operation/entities/operation.entity';
import { Repository } from 'typeorm';
import { CreateDigitalCurrencyDto } from '../dto/create-digital-currency.dto';
import { UpdateDigitalCurrencyDto } from '../dto/update-digital-currency.dto';
import { DigitalCurrency } from '../entities/digital-currency.entity';

@Injectable()
export class DigitalCurrencyService {
  constructor(
    @InjectRepository(DigitalCurrency)
    private readonly currencyRepository: Repository<DigitalCurrency>,
    @InjectRepository(Operation)
    private readonly operationRepository: Repository<Operation>,
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async create(createDigitalCurrencyDto: CreateDigitalCurrencyDto): Promise<Observable<DigitalCurrency | string>> {
    const newDigitalCurrency = new DigitalCurrency();
    const createdBy = from(this.accountRepository.findOne({where: {accountId: createDigitalCurrencyDto.createdBy}})).pipe(
      map((account: AccountEntity) => {
        return account;
      })
    );
    console.log(createdBy);
    const createdFor = from(this.accountRepository.findOne({where: {accountId: createDigitalCurrencyDto.createdFor}})).pipe(
      map((account: AccountEntity) => {
        return account;
      })
    );;
    console.log("Created By: ",createdBy, "Created For: ", createdFor)
    newDigitalCurrency.amount = createDigitalCurrencyDto.amount;
    newDigitalCurrency.operationName = createDigitalCurrencyDto.operationName;
    newDigitalCurrency.paymentMode = createDigitalCurrencyDto.paymentMode;
    newDigitalCurrency.createdByAccount = await this.accountRepository.findOneBy({ accountId: createDigitalCurrencyDto.createdBy });
    newDigitalCurrency.createdForAccount = await this.accountRepository.findOneBy({ accountId: createDigitalCurrencyDto.createdFor });
    // console.log(newDigitalCurrency);
    return from(this.currencyRepository.save(newDigitalCurrency));
  }

  findAll() {
    return `This action returns all digitalCurrency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} digitalCurrency`;
  }

  update(id: number, updateDigitalCurrencyDto: UpdateDigitalCurrencyDto) {
    return `This action updates a #${id} digitalCurrency`;
  }

  remove(id: number) {
    return `This action removes a #${id} digitalCurrency`;
  }
}
