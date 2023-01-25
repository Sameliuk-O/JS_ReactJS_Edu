import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import {Box} from "@mui/material";
import BurgerMenu from "./BurgerMenu";
import {SwitchTheme} from "./SwitchTheme";
import {MenuContainer} from "./styles";

export const DrawerAppBar = () => {

    return (
        <MenuContainer className={"logo_block"}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar className={"logo_container_position"}>
                    <Logo/>
                    <MenuItem/>
                    <Box className={"mobile_position_menu"}>
                        <BurgerMenu/>
                        <SwitchTheme/>
                    </Box>
                </Toolbar>
            </AppBar>
        </MenuContainer>
    );
}

export default DrawerAppBar