import { v4 as uuidv4 } from 'uuid';
import { User } from "../domain/user";
import { CreateUserDTO, UpdateUserDTO } from "../domain/user-dto";
import { UserRepository } from "../domain/user-repository";

export class UserDao implements UserRepository {
    constructor() { }

    private users: User[] = []

    getAll = async () => {
        return this.users
    }

    getById = async (id: string) => {
        const found = this.users.find(u => u.id === id)
        return found || null
    }

    getByEmail = async (email: string) => {
        const found = this.users.find(u => u.email === email)
        return found || null
    }

    create = async (user: CreateUserDTO) => {
        const created = { ...user, id: uuidv4() }
        this.users.push(created)
        return created
    }

    update = async (id: string, user: UpdateUserDTO) => {
        const index = this.users.findIndex(u => u.id === id)
        if (index !== -1) {
            this.users[index] = {
                ...this.users[index],
                ...user,
            };
        }
        return this.users[index]
    }

    delete = async (id: string) => {
        const index = this.users.findIndex(user => user.id === id);

        if (index !== -1) {
            this.users.splice(index, 1);
        }

        return this.users[index]
    }
}