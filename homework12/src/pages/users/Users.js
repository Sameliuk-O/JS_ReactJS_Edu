import * as React from 'react';
import {Grid} from '@mui/material';
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import Luke from "../../assets/image/Luke.webp"
import C_3PO from "../../assets/image/C-3PO.jpeg"
import R2_D2 from "../../assets/image/R2-D2.jpeg"
import DarthVader from "../../assets/image/DarthVader.jpeg"
import LeiaOrgana from "../../assets/image/LeiaOrgana.jpeg"
import OwenLars from "../../assets/image/OwenLars.jpeg"
import BeruWhitesunlars from "../../assets/image/BeruWhitesunlars.jpeg"
import R5_D4 from "../../assets/image/R5-D4.jpeg"
import BiggsDarklighter from "../../assets/image/BiggsDarklighter.jpeg"
import Obi_WanKenobi from "../../assets/image/Obi-WanKenobi.jpeg"
import {UsersContainer} from "./styles";
import UserCard from "../../components/user-card/UserCard";
import {DrawerAppBar} from "../../components/navigation";


export const Users = () => {
    const [users, getUsers] = useState([]);
    const userImageArray = [Luke, C_3PO, R2_D2, DarthVader, LeiaOrgana, OwenLars, BeruWhitesunlars, R5_D4, BiggsDarklighter, Obi_WanKenobi]

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
            .then((response) => response.json())
            .then((json) => getUsers(json));
    }, [])

    return (
        <UsersContainer className={"bodyTheme"}>
            <DrawerAppBar/>
            <Box className={"users_position"}>
                <Grid container spacing={1}>
                    {users.results?.map((user, index) =>
                        <UserCard user={{...user, image: userImageArray[index]}} key={`${user.name}${index}`}/>
                    )}
                </Grid>
            </Box>
        </UsersContainer>
    );
}