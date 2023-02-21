import express, {Request, Response} from "express";
import {userService} from "../services";
import {Post} from "../../common/types-and-interfaces";

export class UserController {
    router = express.Router();

    constructor() {

        this.router.post('/register/', this.register)

        this.router.post('/login/', this.login)

        this.router.post(`/:idUser/post/`, this.createPost)

        this.router.delete(`/:idUser/post/:idPost`, this.deletePost)

        this.router.post(`/:idUser/post/:idPost/edit`, this.editPost)

        this.router.post(`/:idUser/posts`, this.viewAllPosts)

        this.router.post(`/:idUser/posts/skip=:skip/take=:take`, this.viewPaginationPosts)

    }

    register = async (req: Request, res: Response) => {

        const {login, password} = req.body;
        const user = await userService.addUser(login, password);

        res.send(user)
    }

    login = async (req: Request, res: Response) => {

        const {login, password} = req.body;
        const loginUser = await userService.loginUser(login, password);

        res.send(loginUser)
    }

    createPost = async (req: Request, res: Response) => {

        const {title, body} = req.body;
        const idUser: any = req.params.idUser
        const createPost = await userService.createPost(title, body, idUser);

        res.send(createPost)
    }

    deletePost = async (req: Request, res: Response) => {

        const idUser: any = req.params.idUser
        const idPost: any = req.params.idPost
        const deletePost = await userService.deleteUserPost(idUser, idPost);

        res.send(deletePost)

    }

    editPost = async (req: Request, res: Response) => {

        const {title, body} = req.body;
        const idUser: any = req.params.idUser
        const idPost: any = req.params.idPost
        const editUserPost = await userService.editPost(title, body, idUser, idPost);

        res.send(editUserPost)
    }


    viewAllPosts = async (req: Request, res: Response) => {

        const idUser: any = req.params.idUser
        const allPosts: [] = []
        const viewPost = await userService.viewUserPosts(idUser, allPosts);

        res.send(viewPost)

    }

    viewPaginationPosts = async (req: Request, res: Response) => {

        const idUser: any = req.params.idUser
        const skip: any = req.params.skip
        const take: any = req.params.take
        const data: [] = []
        const viewPaginationPosts = await userService.viewPaginationPosts(idUser, skip, take, data);

        res.send(viewPaginationPosts)

    }
}


export const userController = new UserController()
