import { UserRole } from "./user"

export interface CreateUserDTO {
    email: string
    password: string
    name: string
    lastname: string
    age: number
    phone: string
    role: UserRole
}

export interface UpdateUserDTO {
    email?: string
    password?: string
    name?: string
    lastname?: string
    age?: number
    phone?: string
    role?: UserRole
}