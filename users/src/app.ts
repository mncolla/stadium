import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import { Controller } from "./types/controller";

class App {
    private app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();

        this.initMiddlewares();
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        this.app.use(
            cors({
                credentials: true,
                origin: "http://localhost:5173",
            })
        );
        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    private initControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }

    public appListen() {
        this.app.listen(process.env.PORT || 5000, () => {
            console.log(`App listening on the port ${process.env.PORT || 5000}`);
        });
    }
}

export default App;