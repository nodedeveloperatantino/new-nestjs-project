/* eslint-disable prettier/prettier */
import { PaymentMode, PaymentStatus } from "../entities/digital-currency.entity";

export interface UpdateDigitalCurrencyDto {
    amountCreated?: number;
    createdFor?: string;
    createdBy?: string;
    paymentMode?: PaymentMode;
    paymentStatus?: PaymentStatus;
}
