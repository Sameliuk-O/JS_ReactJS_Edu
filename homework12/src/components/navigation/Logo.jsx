import { Box } from "@mui/material";
import logo from '../../assets/image/logo.svg';
import ListItemButton from "@mui/material/ListItemButton";

const Logo = () => {
    return (
        <ListItemButton>
            <Box
                component="img"
                className={"logo"}
                src={logo}
                alt="logo"
            />
        </ListItemButton>
    )
}
export default Logo