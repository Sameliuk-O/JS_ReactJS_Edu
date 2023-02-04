import React from "react";
import {StoriesInformation} from "../component/storiesInformation/StoriesInformation";
import {Box, Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Card = () => {
    const navigate = useNavigate()

    return (
        <Box>
            <Button onClick={() => navigate(-1)}>
                <ArrowBackIcon/>
            </Button>
            <StoriesInformation/>
        </Box>

    )
}