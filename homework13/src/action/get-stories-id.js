import {setIsLoading, setStories} from "../store/stories";
import axios from "axios";
import {ErrorComponent} from "../component/error";
import {GET_STORIES_ID} from "../utils/mockData/mockData";

export const getStories = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            const response = await axios.get(GET_STORIES_ID)
            dispatch(setStories(response.data))
        } catch (e) {
            return (
                <ErrorComponent/>
            )
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}
