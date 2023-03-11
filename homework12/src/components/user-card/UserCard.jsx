import { CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

const UserCard = ({user}) => {

    return (
        <Box maxWidth={350} minWidth={340} margin={1} marginTop={3} flexGrow={1}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"

                    image={`${user.image}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography color="text.secondary">
                        Height: {user.height}
                    </Typography>
                    <Typography color="text.secondary">
                        Mass: {user.mass}
                    </Typography>
                    <Typography color="text.secondary">
                        Eye color: {user.eye_color}
                    </Typography>
                    <Typography color="text.secondary">
                        Skin color: {user.skin_color}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Box>
    );
}

export default UserCard