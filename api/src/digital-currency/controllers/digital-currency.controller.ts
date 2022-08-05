import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DigitalCurrencyService } from '../services/digital-currency.service';
import { CreateDigitalCurrencyDto } from '../dto/create-digital-currency.dto';
import { UpdateDigitalCurrencyDto } from '../dto/update-digital-currency.dto';

@Controller('digital-currency')
export class DigitalCurrencyController {
  constructor(
    private readonly digitalCurrencyService: DigitalCurrencyService,
  ) {}

  @Post()
  create(@Body() createDigitalCurrencyDto: CreateDigitalCurrencyDto) {
    return this.digitalCurrencyService.create(createDigitalCurrencyDto);
  }

  @Get()
  findAll() {
    return this.digitalCurrencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.digitalCurrencyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDigitalCurrencyDto: UpdateDigitalCurrencyDto,
  ) {
    return this.digitalCurrencyService.update(+id, updateDigitalCurrencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.digitalCurrencyService.remove(+id);
  }
}
