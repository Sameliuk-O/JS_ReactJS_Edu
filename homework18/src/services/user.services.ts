import {User, UserModel} from "../models";

export class UserService {

    async addUser(login: string, password: string, email: string, avatar: string, firstName: string, lastName: string, socials: {}, age: number, interests: [], address1: string, address2: string, postIndex:string, isAdmin: boolean = false): Promise<User> {

        return UserModel.create({
            login,
            password,
            isAdmin,
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

        });
    }

    async login(login: string, password: string, isAdmin: boolean = false): Promise<User[] | null> {
        return UserModel.find({login: `${login}`, password: `${password}`, isAdmin: `${isAdmin}`});
    }
}

export const userService = new UserService()