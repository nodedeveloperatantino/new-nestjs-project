import { Test, TestingModule } from '@nestjs/testing';
import { DigitalCurrencyController } from './digital-currency.controller';
import { DigitalCurrencyService } from '../services/digital-currency.service';

describe('DigitalCurrencyController', () => {
  let controller: DigitalCurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalCurrencyController],
      providers: [DigitalCurrencyService],
    }).compile();

    controller = module.get<DigitalCurrencyController>(DigitalCurrencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
