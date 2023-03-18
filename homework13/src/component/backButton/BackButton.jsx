import {useNavigate} from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Box, Button, Typography} from "@mui/material";

export const BackButton = () => {
    const navigate = useNavigate()
    return (
        <Box backgroundColor={"#807A79"}>
            <Button onClick={() => {
                navigate(-1)
            }} sx={{color: "#FFF"}}>
                <ArrowBackIcon/>
                <Typography>
                    Go Back
                </Typography>
            </Button>
        </Box>
        )
}