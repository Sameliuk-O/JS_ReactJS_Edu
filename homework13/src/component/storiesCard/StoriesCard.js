import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import stories from "../../store/stories";
import {useDispatch, useSelector} from "react-redux";
import {getStoriesCard} from "../../action/GetStoriesCard";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export const StoriesCard = () => {


    const dispatchStoriesCard = useDispatch()

    const {stories} = useSelector((state) => ({stories: state.stories || []}));
    useEffect(() => {
        dispatchStoriesCard(getStoriesCard(stories.items))
    }, [stories.items])


    return (

        <Box>
            {stories.itemsCard && stories.itemsCard.map((el) => (
                <Box sx={{margin: '20px'}} key={el.id}>
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                HackerNews
                            </Typography>
                            <Typography variant="h5" component="div">
                                {el.title}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                Author: {el.by}
                            </Typography>
                            <Typography variant="body2">
                                Score: {el.score}
                            </Typography>
                            <Typography variant="body2">
                                Date publication: {new Date(el.time * 1000).toLocaleString()}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/story/${el.id}`}>
                                <Button size="small">Learn More</Button>
                            </Link>

                        </CardActions>
                    </Card>
                </Box>


            ))}


        </Box>

    );
}
