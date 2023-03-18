import {useEffect} from "react"
import {useDispatch} from "react-redux";

import {Box} from "@mui/material";

import {useStoriesSelector} from "../store/stories";
import {Reload} from "../component/reload";
import {Loading} from "../component/loading";
import {getStories} from "../action/get-stories-id";
import {getStoriesCard} from "../action/get-stories-card";
import {StoriesCard} from "../component/storiesCard";

export const HomePage = () => {
    const dispatch = useDispatch()
    const dispatchStoriesCard = useDispatch()
    const {items, itemsCard, isLoading} = useStoriesSelector();

    const handleClickReloadPage = () => {
        dispatch(getStories())
        dispatchStoriesCard(getStoriesCard(items))
    }

    useEffect(() => {
        if (!items.length) {
            dispatch(getStories())
        }
    }, [])

    useEffect(() => {
        if (!itemsCard.length && items) {
            dispatchStoriesCard(getStoriesCard(items))
        }
    }, [items])

    useEffect(() => {
       const intervalReload =  setInterval(() => {
            dispatch(getStories())
            dispatchStoriesCard(getStoriesCard(items))
        }, 60000)

        return () => clearInterval(intervalReload);
    }, [])

    return (
        <Box>
            {isLoading ?
                <Loading/> :
                <Box backgroundColor={"#807A79"}>
                    <Reload onClick={handleClickReloadPage}/>
                    <StoriesCard/>
                </Box>
            }
        </Box>
    )
}