import axios from "axios";
import {setIsLoading, setOneStoriesItem} from "../store/stories";
import {ErrorComponent} from "../component/error";
import {GET_ONE_STORIES_CARD} from "../utils/mockData/mockData";

export const GetOneStoriesCard = (storiesId) => {

    return async (dispatchOneStories) => {
        try {
            const response = await axios.get( GET_ONE_STORIES_CARD(storiesId) )
            dispatchOneStories(setOneStoriesItem(response.data))
        } catch (e) {
            return (
                <ErrorComponent/>
            )
        } finally {
            dispatchOneStories(setIsLoading(false))
        }
    }
}