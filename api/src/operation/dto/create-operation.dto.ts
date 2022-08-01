/* eslint-disable prettier/prettier */
import { OperationType } from "../models/operation.interface";

/* eslint-disable prettier/prettier */
export interface CreateOperationDto {
    id?: string,
    createdBy?: string,
    operationType?: OperationType,
}
