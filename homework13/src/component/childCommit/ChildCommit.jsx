import {useEffect, useState} from "react";

import {Box, Card, CardContent, Typography} from "@mui/material";

import {getChildCommit} from "../../action/get-child-commits";
import {convertTime} from "../../utils/convertTime/convertTime";

export const ChildCommit = ({isShowChildCommits, commits}) => {
    const [commentChild, setCommentChild] = useState([])

    useEffect(() => {
        if (isShowChildCommits && commits) {
           getChildCommit(commits, setCommentChild)
        }
    }, [isShowChildCommits])

    return (
        <Box>{
            commentChild && commentChild.map((child) => (
                <Box margin={"20px"} key={child.id}>
                    <Card sx={{minWidth: "250px"}} backgroundColor={"#eef1f7"}>
                        <CardContent>
                            <Typography fontSize={14} color="text.secondary" gutterBottom>
                                HackerNews
                            </Typography>
                            <Typography variant="p" component="div">
                                {child.text}
                            </Typography>
                            <Typography mb={1.5} color="text.secondary">
                                Author: {child.by}
                            </Typography>
                            <Typography variant="body2">
                                Date publication: {convertTime(child.time)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            ))
        }</Box>
    )
}