import axios from "axios";
import {setIsLoading, setStoriesCommits} from "../store/stories";
import {ErrorComponent} from "../component/error";
import {GET_STORIES_COMMITS} from "../utils/mockData/mockData";


export const getStoriesCommits = (kids) => {
    return async (dispatchStoriesCommits) => {
        try {
            dispatchStoriesCommits(setIsLoading(true))

            const result = await Promise.all(kids?.map(async (kid) => {
                const response = await axios.get(GET_STORIES_COMMITS(kid));
                return response.data

            }));

            return dispatchStoriesCommits(setStoriesCommits(result));
        } catch (e) {
            return (
                <ErrorComponent/>
            )
        } finally {
            dispatchStoriesCommits(setIsLoading(false))
        }
    }
}

