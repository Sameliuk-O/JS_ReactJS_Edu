import axios from "axios";
import {setChildCommit, setIsLoading} from "../store/stories";

export const getChildCommit = (kids) => {
    return async (dispatchChildCommit) => {
        try {
            dispatchChildCommit(setIsLoading(true))
            const result = await Promise.all(kids?.map(async (element) => {
                const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`);
                return response.data
            }));
            return dispatchChildCommit(setChildCommit(result));
        } catch
            (e) {
            console.log(e)
        }
    }
}