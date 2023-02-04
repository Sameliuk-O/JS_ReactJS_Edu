import React, {useEffect, useState} from "react";
import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {ChildCommit} from "../childCommit/ChildCommit";
import {getChildCommit} from "../../action/GetChildCommits";
import {useDispatch, useSelector} from "react-redux";
import {getStoriesCommits} from "../../action/GetStoriesCommits";


export const Commit = ({commit, isShowCommits}) => {
    const [childCommits, setChildCommits] = useState(false);
//
//     const {stories} = useSelector((state) => ({stories: state.stories || []}));
//
//     const dispatchStoriesCommits = useDispatch()
//
//
//     console.log(isShowCommits);
//     useEffect(() => {
//
//         if (isShowCommits && commit) {
//         console.log('kids', stories.itemsOneStories.kids)
//         dispatchStoriesCommits(getStoriesCommits(stories.itemsOneStories.kids))}
//     }, [stories.itemsOneStories])
//
//
// console.log(commit)
    return(
        <Box sx={{margin: '20px'}} key={commit.id}>
            <Card sx={{ minWidth: 500 }} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        HackerNews
                    </Typography>
                    <Typography variant="p" component="div" >
                        {commit.text}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Author: {commit.by}
                    </Typography>
                    <Typography variant="body2">
                        Date publication: {new Date(commit.time * 1000).toLocaleString()}
                    </Typography>
                </CardContent>
                {commit.kids &&  <Button size="small" onClick={() => setChildCommits(true)}>Answer {commit.kids.length}</Button>}
                {childCommits && <ChildCommit isShowChildCommits={childCommits} commits={commit.kids}/>}

            </Card>
        </Box>


    )
}