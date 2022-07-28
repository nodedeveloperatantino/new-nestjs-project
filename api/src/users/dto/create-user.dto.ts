/* eslint-disable prettier/prettier */
import { UserRole } from "../models/user.interface";

export interface CreateUserDto {
    id?: string,
    name?: string,
    username?: string,
    email?: string,
    password?: string,
    role?: UserRole
}