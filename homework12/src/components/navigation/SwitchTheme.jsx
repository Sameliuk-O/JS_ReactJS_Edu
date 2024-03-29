import { createContext, useContext } from "react";

import { Box, useTheme, IconButton } from "@mui/material";

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
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            color={'text.primary'}
            borderRadius={'1'}
        >
            <IconButton ml={1} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
            </IconButton>
        </Box>
    );
}