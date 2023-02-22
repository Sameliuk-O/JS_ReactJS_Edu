export type User = {
    id: number;
    login: string;
    password: string;
    isAdmin: boolean;
    posts?: []
}


export type Post = {
    idUser: number;
    idPost: number;
    title: string;
    body: string
}

export type deletePost = {
    idUser: number;
    idPost: number;
}

export type viewPost = {
    idUser: number,
    allPosts: []
}

export type viewPaginationPostsLink = {
    idUser: number
    skip: number,
    take: number
}

export type viewPaginationPosts = {
    idUser: number,
    data: []
}