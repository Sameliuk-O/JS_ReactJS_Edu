import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getStories} from "../action/GetStoriesId";
import {getStoriesCard} from "../action/GetStoriesCard";
import {StoriesCard} from "../component/storiesCard/StoriesCard";
import {Box} from "@mui/material";
import {Reload} from "../component/reload";


export const HomePage = () => {
    const dispatch = useDispatch()
    const dispatchStoriesCard = useDispatch()
    const {stories} = useSelector((state) => ({stories: state.stories || []}))

    useEffect(() => {
        dispatch(getStories())

    }, [])


    useEffect(() => {

        dispatchStoriesCard(getStoriesCard(stories.items))
    }, [stories.items])


    useEffect(() => {
        setInterval(() => {
            dispatch(getStories())
            dispatchStoriesCard(getStoriesCard(stories.items))
        }, 60000)
    }, [])
    return (
        <Box>
            {/*{stories.isLoading ? (*/}
            {/*        <Typography>*/}
            {/*            Loading...*/}
            {/*        </Typography>*/}
            {/*    )*/}
            {/*    :*/}
                <Box sx={{backgroundColor: "#807A79"}}>
                    <Reload onClick={() => {
                        dispatch(getStories())
                        dispatchStoriesCard(getStoriesCard(stories.items))
                    }}/>
                    <StoriesCard/>
                </Box>
            {/*}*/}
        </Box>
    )
}