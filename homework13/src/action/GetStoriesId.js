import {setIsLoading, setStories} from "../store/stories";
import axios from "axios";

export const getStories = () => {

    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=100`)
            console.log(response.data)
            dispatch(setStories(response.data))
            // } catch (error) {
            //     // dispatch(setIsError(true));
            //     // dispatch(setIsLoading(false));
            //     setTimeout(() =>{
            //         dispatch(setIsError(false))
            //     }, 2000)

        } catch (e) {
            dispatch(setIsLoading(false))

            console.log(e)
        }

    }
}

