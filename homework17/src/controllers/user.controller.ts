import express, {NextFunction, Request, Response} from "express";
import {postsService, userService} from "../services";
import {HttpError} from "../common";
import {UserModel} from "../models";


export class UserController {
    router = express.Router();

    constructor() {

        this.router.post('/register/', this.register)

        this.router.post('/login/', this.login)

        this.router.post(`/:idUser/post/`, this.createPost)

        this.router.get(`/:idUser/posts`, this.viewPaginationPosts)

    }

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const {login, password} = req.body;
            if (await UserModel.findOne({login})) {

                throw  new HttpError(409, "Username is exist", "Register User")

            }

            const user = await userService.addUser(login, password);
            res.send(user)

        } catch (e) {
            console.log("Error throwed:", e)
            next(e)
        }

    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {login, password} = req.body;
            const user = await UserModel.findOne({login})


            if (user?.login != login) {

                throw  new HttpError(404, "Username is not exist", "Login User")

            } else if (user?.password != password) {
                throw  new HttpError(404, "Password is not exist", "Login User")
            }


            const response = await userService.login(login, password)

            res.send(response)
        } catch (e) {
            console.log("Error throwed:", e)
            next(e)
        }
    }

    createPost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {title, body} = req.body;
            const idUser: string = req.params.idUser

            const createPost = await postsService.createPost(title, body, idUser);

            res.send(createPost)
        } catch (e) {

            console.log("Error throwed:", e)
            next(e)

        }

    }


    viewPaginationPosts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const skip = Number(req.query.skip);
            const take = Number(req.query.take);
            const {idUser} = req.params

            const viewPaginationPosts = await postsService.viewPaginationPosts(idUser, skip, take);

            res.send(viewPaginationPosts)
        } catch (e) {
            console.log("Error throwed:", e)
            next(e)
        }


    }
}

export const userController = new UserController()
