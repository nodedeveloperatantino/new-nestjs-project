import { Module } from '@nestjs/common';
import { DigitalCurrencyService } from './services/digital-currency.service';
import { DigitalCurrencyController } from './controllers/digital-currency.controller';

@Module({
  controllers: [DigitalCurrencyController],
  providers: [DigitalCurrencyService]
})
export class DigitalCurrencyModule {}
