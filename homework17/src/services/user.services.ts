import {User, UserModel} from "../models";

export class UserService {

    async addUser(login: string, password: string, isAdmin: boolean = false): Promise<User> {

        return UserModel.create({
            login,
            password,
            isAdmin
        });
    }

    async login(login: string, password: string, isAdmin: boolean = false): Promise<User[] | null> {
        return UserModel.find({login: `${login}`, password: `${password}`, isAdmin: `${isAdmin}`});
    }
}

export const userService = new UserService()