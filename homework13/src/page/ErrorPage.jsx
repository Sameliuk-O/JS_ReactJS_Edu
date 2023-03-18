import {Box, Typography} from "@mui/material";

export const ErrorPage = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} margin={4}>
            <Typography fontSize={38} color={"red"} fontWeight={"bold"}>
                Page not found
            </Typography>
        </Box>
    )
}