import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import {Box, Typography} from "@mui/material";

import {useStoriesSelector} from "../../store/stories";
import {getStoriesCommits} from "../../action/get-stories-commits";
import {Commit} from "../commit";

export const Commits = () => {
    const dispatchStoriesCommits = useDispatch()
    const {itemsOneStories, itemsCommits} = useStoriesSelector();

    useEffect(() => {
        if (itemsOneStories.kids) {
            dispatchStoriesCommits(getStoriesCommits(itemsOneStories.kids))
        }
    }, [itemsOneStories])

    return (
        <Box>
            <Box
                display={'inline-block'} mx={'2px'}
            >
                <Typography variant={"h5"}>
                    Comments: {itemsOneStories?.kids && itemsCommits.length > 0 ? itemsCommits.length : 0}
                </Typography>
                {itemsOneStories?.kids && itemsCommits?.map((commit) => (
                    <Commit commit={commit} key={commit.id}/>
                ))}
            </Box>
        </Box>
    )
}