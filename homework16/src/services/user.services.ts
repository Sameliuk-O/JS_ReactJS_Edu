import {
    deletePost,
    Post,
    User,
    viewPaginationPosts,
    viewPost
} from "../../common/types-and-interfaces";


export class UserService {

    db: any[] = [];
    idCounter: number = 0;
    idCounterPost: number = 0

    async addUser(login: string, password: string, isAdmin: boolean = false): Promise<User> {
        const user: User = {
            id: this.idCounter,
            login,
            password,
            posts: [],
            isAdmin
        }

        this.db.push(user)
        this.idCounter++

        return user;
    }

    async loginUser(login: string, password: string, isAdmin: boolean = false, posts: [] = []): Promise<User> {
        let userLogin = {
            id: 0,
            login,
            password,
            isAdmin,
            posts
        }
        for (let i = 0; this.db.length > i; i++) {
            if (login == this.db[i].login && password == this.db[i].password) {
                console.log('User login', this.db[i].login,)
                return userLogin = {
                    id: this.db[i].id,
                    login: this.db[i].login,
                    password: this.db[i].password,
                    isAdmin: this.db[i].isAdmin,
                    posts: this.db[i].posts
                }
            }
        }
        return userLogin
    }

    async createPost(title: string, body: string, idUser: number | string): Promise<Post> {
        idUser = (Number(idUser))

        const post: Post = {
            idUser: idUser,
            idPost: this.idCounterPost,
            title,
            body
        }

        this.db[idUser].posts.push(post)
        this.idCounterPost++

        return post
    }

    async deleteUserPost(idUser: number, idPost: number | string) {

        const deletePost: deletePost = {
            idUser: Number(idUser),
            idPost: Number(idPost),
        };

        let postIndex = this.db[idUser].posts.findIndex((post: { idPost: number }) => post.idPost === deletePost.idPost);
        this.db[idUser].posts.splice(postIndex, 1)
    }

    async editPost(title: string, body: string, idUser: number, idPost: number | string): Promise<Post> {

        const editPost: Post = {
            idUser: Number(idUser),
            idPost: Number(idPost),
            title,
            body
        }

        this.db[idUser].posts.filter((el: Post) => {
                if (el.idPost == editPost.idPost && el.idUser == editPost.idUser) {
                    el.title = editPost.title;
                    el.body = editPost.body
                    return el
                }
            }
        )

        return editPost
    }

    async viewUserPosts(idUser: number | string, allPosts: [] = []): Promise<viewPost> {

        const viewPost: viewPost = {
            idUser: Number(idUser),
            allPosts
        }

        viewPost.allPosts = this.db[viewPost.idUser].posts

        return viewPost
    }

    async viewPaginationPosts(idUser: number, skip: number | string, take: number | string, data: [] = []): Promise<viewPaginationPosts> {

        const viewPaginationPost: viewPaginationPosts = {
            idUser: Number(idUser),
            data
        }

        skip = Number(skip)
        take = Number(take)

        const slicedPosts: [] = this.db[viewPaginationPost.idUser].posts.slice(skip, skip + take)
        viewPaginationPost.data.push(...slicedPosts)

        return viewPaginationPost
    }


}

export const userService = new UserService()