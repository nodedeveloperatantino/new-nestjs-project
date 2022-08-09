/* eslint-disable prettier/prettier */
import { OperationName, PaymentMode, PaymentStatus } from "../entities/digital-currency.entity";

export interface CreateDigitalCurrencyDto {
    amount?: number;
    operationName?: OperationName;
    createdFor?: string;
    createdBy?: string;
    paymentMode?: PaymentMode;
    paymentStatus?: PaymentStatus;
}
