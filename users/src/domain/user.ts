export enum UserRole {
    regular = "REGULAR",
    vip = "VIP"
}

export interface User {
    id: string
    email: string
    password: string
    name: string
    lastname: string
    age: number
    phone: string
    role: UserRole
}