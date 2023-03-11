import { Box, AppBar, CssBaseline, Toolbar } from "@mui/material";

import TemporaryDrawer from "./BurgerMenu";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { SwitchTheme } from "./SwitchTheme";

import { MenuContainer } from "./styles";

export const DrawerAppBar = () => {

    return (
        <MenuContainer>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar className={"logo-container-position"}>
                    <Logo/>
                    <MenuItem/>
                    <Box className={"mobile-position-menu"}>
                        <TemporaryDrawer/>
                        <SwitchTheme/>
                    </Box>
                </Toolbar>
            </AppBar>
        </MenuContainer>
    );
}