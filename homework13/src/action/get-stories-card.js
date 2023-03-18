import axios from "axios";
import {setIsLoading, setStoriesCard} from "../store/stories";
import {ErrorComponent} from "../component/error";
import {GET_STORIES_CARD} from "../utils/mockData/mockData";

export const getStoriesCard = (idCards) => {

    return async (dispatchStoriesCard) => {
        try {
            const result = await Promise.all(idCards?.map(async (idCard) => {
                const response = await axios.get(GET_STORIES_CARD(idCard));
                return response.data
            }));
            return dispatchStoriesCard(setStoriesCard(result));
        } catch (e) {
            return (
                <ErrorComponent/>
            )
        }


    }
}