import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MENU_ITEMS_MOCK } from "../../mock/menuItems";

const MenuItem = () => {
    return (
        <Box sx={{
            display: {xs: 'none', sm: 'block', display: 'flex'},
        }} className={"nav-link"}>
            {MENU_ITEMS_MOCK.map((item) => (
                <Button key={item} sx={{color: 'text.primary'}}>
                    {item}
                </Button>
            ))}
        </Box>
    );
}

export default MenuItem