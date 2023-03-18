import {useEffect} from "react";

import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Box, Link, Typography} from "@mui/material";

import {GetOneStoriesCard} from "../../action/get-one-stories-card";
import {Commits} from "../commits";
import {useStoriesSelector} from "../../store/stories";
import {convertTime} from "../../utils/convertTime/convertTime";


export const StoriesInformation = () => {
    const {storiesId} = useParams()
    const dispatchOneStories = useDispatch()
    const {items, itemsOneStories} = useStoriesSelector();

    useEffect(() => {
        dispatchOneStories(GetOneStoriesCard(storiesId))
    }, [items])

    return (
        <Box>
            <Typography sx={{fontSize: 20, textAlign: "center", marginTop: 2}} color="text.secondary">
                {itemsOneStories.title}
            </Typography>
            <Typography sx={{fontSize: 14, textAlign: "center", marginTop: 2}} color="text.secondary">
                Author: {itemsOneStories.by}
            </Typography>
            <Typography textAlign={"center"}>
                <Link
                    href={itemsOneStories.url}
                    sx={{fontSize: 20, textAlign: "center"}}
                >
                    Visit stories
                </Link>
            </Typography>
            <Typography sx={{fontSize: 20, textAlign: "center"}}>
                Date publication: {convertTime(itemsOneStories.time)}
            </Typography>
            <Commits/>
        </Box>
    )
}