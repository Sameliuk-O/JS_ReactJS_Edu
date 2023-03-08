import Joi from "joi";

export const registerBodySchema = Joi.object({
    login: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(3).max(255).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|;:'",.<>?])[A-Za-z\d!@#$%^&*()_\-+={}[\]|;:'",.<>?]/
    ).required(),
    email: Joi.string().min(3).max(255).email().required(),
    avatar: Joi.string().min(3).max(255),
    firstName: Joi.string().min(3).max(255),
    lastName: Joi.string().min(3).max(255),
    socials: Joi.object({
        facebook: Joi.string().min(3).max(255),
        instagram: Joi.string().min(3).max(255),
        twitter: Joi.string().min(3).max(255),
    }),
    age: Joi.number().integer().min(18).max(150).required(),
    interests: Joi.array().items(Joi.string()),
    address1: Joi.string().min(10).max(255).required(),
    address2: Joi.string().min(10).max(255),
    postIndex: Joi.string().length(6).required()
})


export const createPostSchema = Joi.object({
    title: Joi.string().min(10).max(64).required(),
    body: Joi.string().min(10).max(1000).required(),
    userId: Joi.string().required()

})

export const loginUserSchema = Joi.object({
    login: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(3).max(255).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|;:'",.<>?])[A-Za-z\d!@#$%^&*()_\-+={}[\]|;:'",.<>?]/
    ).required(),

})

export const editPostSchema = Joi.object({
    title: Joi.string().min(10).max(64).required(),
    body: Joi.string().min(10).max(1000).required(),

})