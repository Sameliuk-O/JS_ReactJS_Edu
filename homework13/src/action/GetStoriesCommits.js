import axios from "axios";
import {setIsLoading, setStoriesCommits} from "../store/stories";


export const getStoriesCommits = (kids) => {
    return async (dispatchStoriesCommits) => {
        try {

            dispatchStoriesCommits(setIsLoading(true))

            const result = await Promise.all(kids?.map(async (kid) => {
                console.log(kid)
                const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`);
                return response.data

            }));
            // console.log(result)
            return dispatchStoriesCommits(setStoriesCommits(result));
        } catch
            (e) {
            dispatchStoriesCommits(setIsLoading(false))

            console.log(e)
        }
    }
}

