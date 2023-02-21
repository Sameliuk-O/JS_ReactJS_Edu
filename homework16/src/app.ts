import express from 'express'
import {userController} from "./controllers";
import bodyparser from "body-parser";
import morgan from "morgan"
import cors from "cors-ts";
import helmet from "helmet";

export class App {
    app = express()
    port = 8000

    userRoutes(){
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use('/users', userController.router)
    }

    useMiddlewares(){
        this.app.use(
            morgan(
                ':date[iso] ":method :url" :status :res[content-length]'
            )
        )


        this.app.use(bodyparser.urlencoded({extended:true}))
    }

    async init(){
        this.useMiddlewares();
        this.userRoutes()


        this.app.listen(this.port,   () => {
            console.log(`Server is listening on ${this.port}`)
        })
    }

}

(async() => {
    const app = new App()
    await app.init()
})();



