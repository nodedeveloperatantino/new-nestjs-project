/* eslint-disable prettier/prettier */
export interface Operation {
    id?: string,
    createdBy?: string,
    digitalAmountCreated: number,
    operationType?: OperationType,
    gatewayType?: GatewayType,
    referenceId?: string,               // If the payment has been done online or through bank transfer.
}   

export enum OperationType {
    CDC = 'create_digital_currency',
    DDC = 'destroy_digital_currency',
}

export enum GatewayType {
    CASH = 'cash_payment',
    BANKTRANSFER = 'bank_transfer',
    ONLINE = 'online_payment',
}