import React from "react";

import {Box} from "@mui/material";

import {StoriesInformation} from "../component/storiesInformation";
import {BackButton} from "../component/backButton";

export const Card = () => {

    return (
        <Box>
            <BackButton/>
            <StoriesInformation/>
        </Box>
    )
}