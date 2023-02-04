import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetOneStoriesCard} from "../../action/GetOneStoriesCard";
import {Box, Link, Typography} from "@mui/material";
import {Commits} from "../commits";
import {Reload} from "../reload";
import {getStoriesCommits} from "../../action/GetStoriesCommits";


export const StoriesInformation = () => {
    const {storiesId} = useParams()

    const dispatchOneStories = useDispatch()

    const {stories} = useSelector((state) => ({stories: state.stories || []}));

    useEffect(() => {
        dispatchOneStories(GetOneStoriesCard(storiesId))
    }, [stories.items])


    return (
            <Box>

                <Typography sx={{fontSize: 20, textAlign: "center", marginTop: 2}} color="text.secondary">
                    {stories.itemsOneStories.title}
                </Typography>
                <Typography sx={{fontSize: 14, textAlign: "center", marginTop: 2}} color="text.secondary">
                    Author: {stories.itemsOneStories.by}
                </Typography>
                <Link
                    href={stories.itemsOneStories.url}
                    sx={{fontSize: 20, textAlign: "center"}}
                >
                    Visit stories
                </Link>
                <Typography sx={{fontSize: 20, textAlign: "center"}}>
                    Date publication: {new Date(stories.itemsOneStories.time * 1000).toLocaleString()}
                </Typography>
                <Commits/>


            </Box>
    )
}