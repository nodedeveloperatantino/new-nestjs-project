/* eslint-disable prettier/prettier */
import { UserRole } from "../models/user.interface";

export interface CreateUserDto {
    id?: string,
    fullName?: string,
    username?: string,
    email?: string,
    password?: string,
    phoneNumber?: string,
    role?: UserRole,
}