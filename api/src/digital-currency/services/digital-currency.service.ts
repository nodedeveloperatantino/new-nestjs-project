import { Injectable } from '@nestjs/common';
import { CreateDigitalCurrencyDto } from '../dto/create-digital-currency.dto';
import { UpdateDigitalCurrencyDto } from '../dto/update-digital-currency.dto';

@Injectable()
export class DigitalCurrencyService {
  create(createDigitalCurrencyDto: CreateDigitalCurrencyDto) {
    return 'This action adds a new digitalCurrency';
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
