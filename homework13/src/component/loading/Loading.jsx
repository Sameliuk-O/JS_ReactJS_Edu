import {Box, CircularProgress} from "@mui/material";

export const Loading = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} minHeight={"100vh"} alignItems={"center"}>
            <CircularProgress />
        </Box>
    )
}