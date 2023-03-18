import React, {useState} from "react";

import {Box, Button, Card, CardContent, Typography} from "@mui/material";

import {ChildCommit} from "../childCommit";
import {convertTime} from "../../utils/convertTime/convertTime";

export const Commit = ({commit}) => {
    const [childCommits, setChildCommits] = useState(false);

    return (
        <Box margin={"20px"} key={commit.id}>
            <Card sx={{minWidth: 500}}>
                <CardContent>
                    <Typography fontSize={14} color="text.secondary" gutterBottom>
                        HackerNews
                    </Typography>
                    <Typography variant="p" component="div">
                        {commit.text}
                    </Typography>
                    <Typography mb={1.5} color="text.secondary">
                        Author: {commit.by}
                    </Typography>
                    <Typography variant="body2">
                        Date publication: {convertTime(commit.time)}
                    </Typography>
                </CardContent>
                {commit.kids &&
                    <Button size="small" onClick={() => setChildCommits(true)}>Answer {commit.kids.length}</Button>}
                {childCommits && <ChildCommit isShowChildCommits={childCommits} commits={commit.kids}/>}
            </Card>
        </Box>
    )
}