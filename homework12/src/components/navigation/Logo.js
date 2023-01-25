import {Box} from "@mui/material";
import logo from '../../assets/image/logo.svg';
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

const Logo = () => {
    return (
        <Typography
            variant="h6"
            component="div"
        >
            <ListItemButton>
                <Box
                    component="img"
                    className={"logo"}
                    src={logo}
                    alt="logo"
                />
            </ListItemButton>
        </Typography>
    )
}
export default Logo