/* eslint-disable prettier/prettier */
export interface Operation {
    id?: string,
    createdBy?: string,
    operationType?: OperationType,            // If the payment has been done online or through bank transfer.
}   

export enum OperationType {
    CDC = 'CREATE_DIGITAL_CURRENCY',
    DDC = 'DESTROY_DIGITAL_CURRENCY',
    CAC = 'CREATE_ACCOUNT',
    ATU = 'ACCOUNT_TOP_UP'
}