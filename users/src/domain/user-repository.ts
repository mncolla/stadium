import { User } from "./user"
import { CreateUserDTO, UpdateUserDTO } from "./user-dto"

export interface UserRepository {
    getAll: () => Promise<User[]>
    getById: (id: string) => Promise<User | null>
    getByEmail: (email: string) => Promise<User | null>
    create: (user: CreateUserDTO) => Promise<User>
    update: (id: string, user: UpdateUserDTO) => Promise<User>
    delete: (id: string) => Promise<User>
}