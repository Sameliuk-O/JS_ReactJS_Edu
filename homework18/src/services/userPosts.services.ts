import {Post, PostModel} from "../models";
import {Types} from "mongoose";

export class PostsService {
    async createPost(title: string, body: string, userId: string): Promise<Post | null> {
        return PostModel.create({body, title, owner: new Types.ObjectId(userId)})
    }

    async deleteUserPost(idUser: string, idPost: string) {
        return PostModel.deleteOne({owner: idUser, _id: idPost})
    }

    async editPost(title: string, body: string, idUser: string, idPost: string): Promise<Post | null> {
        return PostModel.findByIdAndUpdate(
            idPost,
            {$set: {title, body}},
            {new: true})
    }

    async viewPaginationPosts(idUser: string, skip: number, take: number): Promise<Post[]> {
        skip = Number(skip)
        skip = (skip - 1) * take
        take = Number(take)


        return PostModel.find({owner: idUser}).skip(skip).limit(take).exec()
    }
}

export const postsService = new PostsService()