import ReplayIcon from "@mui/icons-material/Replay";
import {Button} from "@mui/material";


export const Reload = ({ onClick}) => {

    return(
        <Button onClick={onClick} sx={{color: "#FFF"}}> Reload Comments <ReplayIcon/></Button>

    )

}