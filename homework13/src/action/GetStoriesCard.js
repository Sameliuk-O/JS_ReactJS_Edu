import axios from "axios";
import {setIsLoading, setStoriesCard} from "../store/stories";

export const getStoriesCard = (idCards) => {

    return async (dispatchStoriesCard) => {
        try {

            dispatchStoriesCard(setIsLoading(true))
            const result = await Promise.all(idCards?.map(async (idCard) => {
                const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${idCard}.json?print=pretty`);
                return response.data

            }));

            return dispatchStoriesCard(setStoriesCard(result));
        } catch (e) {
            console.log(e)
        }


    }
}