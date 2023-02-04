import {useDispatch, useSelector} from "react-redux";
import {getChildCommit} from "../../action/GetChildCommits";
import {useEffect} from "react";
import {Box, Button, Card, CardContent, Typography} from "@mui/material";

export const ChildCommit = ({isShowChildCommits, commits}) => {


    const dispatchChildCommit = useDispatch()

    const {stories} = useSelector((state) => ({stories: state.stories || []}));

    console.log('kids', stories.itemsCommits)
    useEffect(() => {
        if (isShowChildCommits && commits) {
            console.log('kids', stories.itemsCommits)
            dispatchChildCommit(getChildCommit(commits))
        }

    }, [isShowChildCommits])
    return (
        <Box>{
            stories.itemChildCommits && stories.itemChildCommits.map((child) => (

                <Box sx={{margin: '20px 20px'}} key={child.id} >
                    <Card sx={{minWidth: 250,  backgroundColor: "#eef1f7"}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                HackerNews
                            </Typography>
                            <Typography variant="p" component="div">

                                {child.text}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                Author: {child.by}
                            </Typography>
                            <Typography variant="body2">
                                Date publication: {new Date(child.time * 1000).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            ))
        }</Box>
    )
}