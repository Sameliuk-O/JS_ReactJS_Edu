import React, { useEffect, useMemo, useState } from 'react';
import { Grid, ThemeProvider, Box, CssBaseline, createTheme } from '@mui/material';

import { ColorModeContext } from "../../components/navigation/SwitchTheme"
import { USER_IMAGES_MOCK } from "../../mock/userImages";
import { DrawerAppBar } from "../../components/navigation";
import UserCard from "../../components/user-card/UserCard";
import { getUserData } from "../../utils";

export const Users = () => {
    const [users, getUsers] = useState([]);

    useEffect(() => {
        getUserData().then(data => getUsers(data)).catch((e) => {
            console.log(e)
        })
    }, [])

    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Box padding={8} borderRadius={4} className={"bodyTheme"}>
                    <DrawerAppBar/>
                    <Box flexGrow={1}>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="center"
                        >
                            {users.results?.map((user, index) =>
                                <UserCard user={{...user, image: USER_IMAGES_MOCK[index]}}
                                          key={`${user.name}${index}`}/>
                            )}
                        </Grid>
                    </Box>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}