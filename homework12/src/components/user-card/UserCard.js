import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {UserCardContainer} from "./styles";


const UserCard = ({user}) => {

    return (
        <UserCardContainer>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
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
        </UserCardContainer>
    );
}

export default UserCard