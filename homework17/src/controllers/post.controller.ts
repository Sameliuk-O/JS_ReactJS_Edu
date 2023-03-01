import express, {NextFunction, Request, Response} from "express";
import {postsService} from "../services";
import {PostModel} from "../models";
import {HttpError} from "../common";

export class PostController {
    router = express.Router();

    constructor() {

        this.router.patch(`/:idUser/post/:idPost/edit`, this.editPost)

        this.router.delete(`/:idUser/post/:idPost`, this.deletePost)
    }

    deletePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idUser: string = req.params.idUser
            let idPost: string = req.params.idPost

            if (!await PostModel.findOne({_id: idPost})) {
                throw  new HttpError(404, "Id Post is not exist", "Delete Post")
            }

            const deletePost = await postsService.deleteUserPost(idUser, idPost);

            res.send(deletePost)
        } catch (e) {
            console.log("Error throwed:", e)
            next(e)
        }

    }

    editPost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {title, body} = req.body;
            const idUser: string = req.params.idUser
            const idPost: string = req.params.idPost

            if (!await PostModel.findOne({_id: idPost})) {
                throw  new HttpError(404, "Id Post is not exist", "Delete Post")
            }

            const editUserPost = await postsService.editPost(title, body, idUser, idPost);

            res.send(editUserPost)
        } catch (e) {
            console.log("Error throwed:", e)
            next(e)
        }

    }

}

export const postController = new PostController()