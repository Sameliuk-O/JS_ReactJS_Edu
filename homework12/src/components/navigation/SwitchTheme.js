import {Box, useTheme} from "@mui/material";
import {createContext, useContext} from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});
export const SwitchTheme = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.primary',
                borderRadius: 1,
            }}
        >
            <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
            </IconButton>
        </Box>
    );
}