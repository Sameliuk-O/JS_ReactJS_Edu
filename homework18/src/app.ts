import express, {NextFunction, Request, Response} from 'express'
import {userController} from "./controllers";
import bodyparser from "body-parser";
import morgan from "morgan"
import cors from "cors-ts";
import helmet from "helmet";
import mongoose, {Error} from "mongoose";
import {postController} from "./controllers/post.controller";
import {exceptionFilter} from "./common/errors/exception.filter";
import {options} from "joi";

export class App {
    app = express()
    port = 8000

    userRoutes() {
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use('/users', userController.router)
        this.app.use('/post/', postController.router)

    }

    useMiddlewares() {

        this.app.use(
            morgan(
                ':date[iso] ":method :url" :status :res[content-length]'
            )
        )

        this.app.use(bodyparser.urlencoded({extended: true}))
        this.app.use(bodyparser.raw())

    }

    async initDb() {
        await mongoose.connect('mongodb://localhost:27017/homework18');
        console.log("Database connection established successfully")
    }

    async init() {
        this.useMiddlewares();
        this.userRoutes()
        await this.initDb()

        this.app.use(exceptionFilter.catch.bind(exceptionFilter))
        this.app.listen(this.port, () => {
            console.log(`Server is listening on ${this.port}`)
        })

        process.on(
            "uncaughtException",
            (e: Error) => {
                console.log("Uncaught Exception", e.message)
            }
        )
    }
}

(async () => {
    const app = new App()
    await app.init()
})();



