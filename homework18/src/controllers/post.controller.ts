import {NextFunction, Request, Response} from "express";
import {postsService} from "../services";
import {PostModel} from "../models";
import {HttpError} from "../common";
import {BaseController} from "../common/abstract";
import {editPostSchema} from "../common/validation";


export class PostController extends BaseController {

    constructor() {
        super();

        this.bindRoutes([
            {
                path: '/:idUser/post/:idPost/edit',
                method: 'patch',
                handler: this.editPost,
                validators: {
                    body: editPostSchema
                }
            },
            {
                path: '/:idUser/post/:idPost',
                method: 'delete',
                handler: this.deletePost,
            },
        ])
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

            const result = editPostSchema.validate(
                {
                    title: `${title}`,
                    body: `${body}`,
                },
                {abortEarly: false, stripUnknown: true, allowUnknown: true}
            )
            this.logger.info(result)

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