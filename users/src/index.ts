
import App from "./app";
import { UserService } from "./domain/user-service";
import { UserController } from "./entry-points/api/user-controller";
import { UserDao } from "./data-access/user-dao";


const app = new App([
    new UserController(new UserService(new UserDao())),
]);
app.appListen();