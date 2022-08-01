/* eslint-disable prettier/prettier */
import { OperationType } from "../models/operation.interface";

export interface UpdateOperationDto {
    id?: string,
    createdBy?: string,
    operationType?: OperationType,
}

