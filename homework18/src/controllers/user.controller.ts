import {NextFunction, Request, Response} from "express";
import {postsService, userService} from "../services";
import {HttpError} from "../common";
import {UserModel} from "../models";
import {BaseController} from "../common/abstract";
import {
    createPostSchema,
    loginUserSchema,
    registerBodySchema,
} from "../common/validation";


export class UserController extends BaseController {

    constructor() {

        super();

        this.bindRoutes([
            {
                path: '/register',
                method: 'post',
                handler: this.register,
                validators: {
                    body: registerBodySchema,
                }
            },
            {
                path: '/login',
                method: 'post',
                handler: this.login,
            },
            {
                path: '/:idUser/post',
                method: 'post',
                handler: this.createPost,
                validators: {
                    body: createPostSchema,
                    // query: registerBodySchema
                }
            },
            {
                path: '/:idUser/posts',
                method: 'get',
                handler: this.viewPaginationPosts,
            },
        ])
    }

    register = async (req: Request, res: Response, next: NextFunction) => {

        console.log(req)

        const {
            login,
            password,
            email,
            avatar,
            firstName,
            lastName,
            socials,
            age,
            interests,
            address1,
            address2,
            postIndex
        } = req.body;


        if (await UserModel.findOne({login})) {
            throw  new HttpError(409, "Username is exist", "Register User")
        }
        const result = registerBodySchema.validate(
            {
                login: `${login}`,
                password: `${password}`,
                email: `${email}`,
                avatar: `${avatar}`,
                firstName: `${firstName}`,
                lastName: `${lastName}`,
                socials: `${socials}`,
                age: `${age}`,
                interests: `${interests}`,
                address1: `${address1}`,
                address2: `${address2}`,
                postIndex: `${postIndex}`
            },
            {abortEarly: false, stripUnknown: true, allowUnknown: true}
        )
        this.logger.info(result)
        const user = await userService.addUser(
            login, password, email, avatar, firstName, lastName, socials, age, interests, address1, address2, postIndex
        );
        res.send(user)
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        const {login, password} = req.body;
        const user = await UserModel.findOne({login})

        const result = loginUserSchema.validate(
            {
                login: `${login}`,
                password: `${password}`,
            },
            {abortEarly: false, stripUnknown: true, allowUnknown: true}
        )

        this.logger.info(result)

        if (user?.login != login) {

            throw  new HttpError(404, "Username is not exist", "Login User")

        } else if (user?.password != password) {
            throw  new HttpError(404, "Password is not exist", "Login User")
        }

        const response = await userService.login(login, password)

        res.send(response)
    }

    createPost = async (req: Request, res: Response, next: NextFunction) => {
        const {title, body, userId} = req.body;
        const idUserUrl: string = req.params.idUser


        const result = createPostSchema.validate(
            {
                title: `${title}`,
                body: `${body}`,
                userId: `${userId}`,
            },
            {abortEarly: false, stripUnknown: true, allowUnknown: true}
        )
        this.logger.info(result)

        const createPost = await postsService.createPost(title, body, idUserUrl);
        res.send(createPost)
    }


    viewPaginationPosts = async (req: Request, res: Response, next: NextFunction) => {
        const skip = Number(req.query.skip);
        const take = Number(req.query.take);
        const {idUser} = req.params

        const viewPaginationPosts = await postsService.viewPaginationPosts(idUser, skip, take);

        res.send(viewPaginationPosts)
    }
}

export const userController = new UserController()
