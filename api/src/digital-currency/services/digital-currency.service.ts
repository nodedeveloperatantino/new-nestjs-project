/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable } from 'rxjs';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { Repository } from 'typeorm';
import { OperationEntity } from '../../operation/models/operation.entity';
import { CreateDigitalCurrencyDto } from '../dto/create-digital-currency.dto';
import { UpdateDigitalCurrencyDto } from '../dto/update-digital-currency.dto';
import { DigitalCurrency } from '../entities/digital-currency.entity';

@Injectable()
export class DigitalCurrencyService {
  constructor(
    @InjectRepository(DigitalCurrency)
    private readonly currencyRepository: Repository<DigitalCurrency>,
    @InjectRepository(OperationEntity)
    private readonly operationRepository: Repository<OperationEntity>,
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async create(createDigitalCurrencyDto: CreateDigitalCurrencyDto): Promise<Observable<DigitalCurrency | string>> {
    const newDigitalCurrency = new DigitalCurrency();
    const createdBy = await this.accountRepository.findOne({where: {accountId: createDigitalCurrencyDto.createdBy}});
    const createdFor = await this.accountRepository.findOne({where: {accountId: createDigitalCurrencyDto.createdFor}});
    
    newDigitalCurrency.amount = createDigitalCurrencyDto.amount;
    newDigitalCurrency.operationName = createDigitalCurrencyDto.operationName;
    newDigitalCurrency.paymentMode = createDigitalCurrencyDto.paymentMode;
    newDigitalCurrency.createdByAccount = createdBy;
    newDigitalCurrency.createdForAccount = createdFor;
    
    createdBy.accountBalance += +createDigitalCurrencyDto.amount;
    from(this.accountRepository.save(createdBy));
    return from(this.currencyRepository.save(newDigitalCurrency));
  }

  findAll(): Observable<DigitalCurrency[] | string>  {
    return from(this.currencyRepository.find()).pipe(
      map((currency: DigitalCurrency[]) => {
        return currency;
      }),
    );
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
