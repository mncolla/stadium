import { Request, Response, Router} from "express";
import { Controller } from "../../types/controller";
import { UserService } from "../../domain/user-service";
import { CreateUserDTO, UpdateUserDTO } from "../../domain/user-dto";

export class UserController implements Controller {
    readonly path = "/users"
    readonly router = Router()

    constructor(private readonly userService: UserService) {
        this.initRoutes()
    }

    private initRoutes = async () => {
        this.router.get(`${this.path}`, this.getAllUsers)
        this.router.get(`${this.path}/:id`, this.getUserById)
        this.router.post(`${this.path}`, this.createUser)
        this.router.put(`${this.path}/:id`, this.updateUser)
        this.router.delete(`${this.path}/:id`, this.deleteUser)
    }


    private getAllUsers = async (_req: Request, res: Response) =>{
        const users = await this.userService.getAll()
        
        return res.status(200).json({
            data: users
        })
    }

    private getUserById = async (req: Request, res: Response) => {

        const userId = req.params.id

        try {
            const response = await this.userService.getById(userId)
    
            return res.status(200).json({
                data: response
            })
        } catch (error: any) {
            return res.status(500).json({
                data: error.message
            })
        }
    }

    private createUser = async (req: Request, res: Response) => {

        const data: CreateUserDTO = req.body;

        try {
            const response = await this.userService.create(data)
    
            return res.status(200).json({
                data: response
            })
        } catch (error: any) {
            return res.status(500).json({
                data: error.message
            })
        }
    }

    private updateUser = async (req: Request, res: Response) => {

        const data: UpdateUserDTO = req.body;
        const userId = req.params.id

        try {
            const response = await this.userService.update(userId, data)
    
            return res.status(200).json({
                data: response
            })
        } catch (error: any) {
            return res.status(500).json({
                data: error.message
            })
        }
    }

    private deleteUser = async (req: Request, res: Response) => {

        const userId = req.params.id

        try {
            const response = await this.userService.delete(userId)
    
            return res.status(200).json({
                data: response
            })  
        } catch (error: any) {
            return res.status(500).json({
                data: error.message
            })
        }
    }
}