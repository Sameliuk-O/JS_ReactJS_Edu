import axios from "axios";
import {setIsLoading, setOneStoriesItem} from "../store/stories";

export const GetOneStoriesCard = (storiesId) => {

    return async (dispatchOneStories) => {
        try {
            dispatchOneStories(setIsLoading(true))
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storiesId}.json?print=pretty`)

            dispatchOneStories(setOneStoriesItem(response.data))
        } catch (e) {
            dispatchOneStories(setIsLoading(false))

            console.log(e)
        }
    }
}