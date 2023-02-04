import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";

import {getStoriesCommits} from "../../action/GetStoriesCommits";
import {Box} from "@mui/material";

import {getChildCommit} from "../../action/GetChildCommits";
import {Commit} from "../commit";
import {Reload} from "../reload";


export const Commits = () => {


    const dispatchStoriesCommits = useDispatch()

    const {stories} = useSelector((state) => ({stories: state.stories || []}));
    useEffect(() => {
        if (stories.itemsOneStories.kids) {
            dispatchStoriesCommits(getStoriesCommits(stories.itemsOneStories.kids))
        }
    }, [stories.itemsOneStories])


//34613408


    const [reloadCommits, setReloadCommits] = useState(false);
    console.log({reloadCommits})


    return (
        <Box>
            <Box
                sx={{display: 'inline-block', mx: '2px'}}
            >
                {/*<Reload onClick={() =>{*/}
                {/*    dispatchStoriesCommits(getStoriesCommits(stories.itemsOneStories.kids))*/}
                {/*}}/>*/}
                {stories.itemsCommits.length > 0 && <Reload onClick={() => {
                    dispatchStoriesCommits(getStoriesCommits(stories.itemsOneStories.kids))
                }}/>}
                {stories.itemsCommits && stories.itemsCommits?.map((commit) => (
                    <Commit commit={commit} key={commit.id}/>
                ))}


            </Box>
        </Box>
    )
}