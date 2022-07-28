/* eslint-disable prettier/prettier */
import { GatewayType, OperationType } from "../models/operation.interface";

/* eslint-disable prettier/prettier */
export interface CreateOperationDto {
    id?: string,
    createdBy?: string,
    digitalAmountCreated: number,
    operationType?: OperationType,
    gatewayType?: GatewayType,
    referenceId?: string,
}
