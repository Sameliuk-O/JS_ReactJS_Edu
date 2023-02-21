export type User = {
    id: number;
    login: string;
    password: string;
    isAdmin: boolean;
    posts?: []
}


export type Post = {
    idUser: any;
    idPost: number;
    title: string;
    body: string
}

export type deletePost = {
    idUser: any;
    idPost: any;
}

export type viewPost = {
    idUser: any,
    allPosts: []
}

export type viewPaginationPostsLink = {
    idUser: any
    skip: any,
    take: any
}

export type viewPaginationPosts = {
    idUser: any,
    data: []
}