import { PartialType } from '@nestjs/mapped-types';
import { CreateDigitalCurrencyDto } from './create-digital-currency.dto';

export class UpdateDigitalCurrencyDto extends PartialType(CreateDigitalCurrencyDto) {}
