/* eslint-disable prettier/prettier */
import { GatewayType, OperationType } from "../models/operation.interface";

export interface UpdateOperationDto {
    id?: string,
    createdBy?: string,
    operationType?: OperationType,
    gatewayType?: GatewayType,
    referenceId?: string,
}

