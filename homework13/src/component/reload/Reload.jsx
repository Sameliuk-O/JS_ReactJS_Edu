import {Button} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

export const Reload = ({onClick}) => {

    return (
        <Button onClick={onClick} sx={{color: "#FFF"}}> Reload Stories <ReplayIcon/></Button>
    )

}