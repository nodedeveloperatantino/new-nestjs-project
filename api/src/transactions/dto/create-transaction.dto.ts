/* eslint-disable prettier/prettier */
export interface CreateTransactionDto {
    transactionId?: string;
    from?: string;
    to?: string;
    amount?: number;
    transactionType?: TransactionTypes;
    description?: string;
    fee?: number;
}

export enum TransactionTypes {
    ATU = 'ACCOUNT_TOP_UP',
    CDC = 'CREATE_DIGITAL_CURRENCY',
    TAX = 'TAX_DEDUCTION',
    YAC = 'YASSIR_COMMISSION',
    ATA = 'ACCOUNT_TO_ACCOUNT_FUND_TRANSFER'
}


export enum GatewayType {
    CASH = 'CASH',
    BANKTRANSFER = 'BANK_TRANSFER',
    ONLINE = 'ONLINE_PAYNMENT',
}

export enum Status {
    PENDING = 'PENDING',
    SUCCESS = 'COMPLETED',
    CANCELLED = 'CANCELLED'
}