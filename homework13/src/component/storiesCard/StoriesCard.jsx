import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";

import {getStoriesCard} from "../../action/get-stories-card";
import {useStoriesSelector} from "../../store/stories";
import {convertTime} from "../../utils/convertTime/convertTime";
import {Loading} from "../loading";

export const StoriesCard = () => {
    const dispatchStoriesCard = useDispatch()
    const {itemsCard, items, isLoading} = useStoriesSelector();

    useEffect(() => {
        if (!itemsCard.length && items) {
            dispatchStoriesCard(getStoriesCard(items))
        }
    }, [items])

    return (
        <Box>
            {!isLoading ? itemsCard && itemsCard.map((el) => (
                <Box margin={'20px'} key={el.id}>
                    <Card sx={{minWidth: "275px"}}>
                        <CardContent>
                            <Typography fontSize={14} color={"text.secondary"} gutterBottom>
                                HackerNews
                            </Typography>
                            <Typography variant="h5" component="div">
                                {el.title}
                            </Typography>
                            <Typography mb={1.5} color="text.secondary">
                                Author: {el.by}
                            </Typography>
                            <Typography variant="body2">
                                Score: {el.score}
                            </Typography>
                            <Typography variant="body2">
                                Date publication: {convertTime(el.time)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/story/${el.id}`}>
                                <Button size="small">Learn More</Button>
                            </Link>

                        </CardActions>
                    </Card>
                </Box>
            )) : <Loading/>}
        </Box>
    );
}
