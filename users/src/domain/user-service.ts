import { CreateUserDTO, UpdateUserDTO } from "./user-dto";
import { UserRepository } from "./user-repository";

export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    getAll = async () => {
        const users = await this.userRepository.getAll()

        return users;
    }

    getById = async (id: string) => {
        const user = await this.userRepository.getById(id)

        return user
    }

    create = async (user: CreateUserDTO) => {
        // check if user exists
        const found = await this.userRepository.getByEmail(user.email)

        if (found) throw new Error('User email already exists!')

        const response = await this.userRepository.create(user)

        return response
    }

    update = async (id: string, user: UpdateUserDTO) => {
        const found = await this.userRepository.getById(id)

        if (!found) throw new Error('User not found!')

        const response = await this.userRepository.update(id, user)

        return response
    }

    delete = async (id: string) => {
        const found = await this.userRepository.getById(id)

        if (!found) throw new Error('User not found!')

        const response = await this.userRepository.delete(id)

        return response
    }
}