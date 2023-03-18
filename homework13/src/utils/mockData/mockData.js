export const GET_STORIES_ID = "https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=100";

export const GET_STORIES_COMMITS = (kid) => {
    return `https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`
}

export const GET_STORIES_CARD = (idCard) => {
    return `https://hacker-news.firebaseio.com/v0/item/${idCard}.json?print=pretty`
}

export const GET_ONE_STORIES_CARD = (storiesId) => {
    return `https://hacker-news.firebaseio.com/v0/item/${storiesId}.json?print=pretty`
}

export const GET_CHILD_COMMITS = (element) => {
    return `https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`
}