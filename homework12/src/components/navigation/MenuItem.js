import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const navItems = ['Home', 'About', 'Contact'];
const MenuItem = () => {
    return (
        <Box sx={{
            display: {xs: 'none', sm: 'block', display: 'flex'},
        }} className={"nav-link"}>
            {navItems.map((item) => (
                <Button key={item} sx={{color: 'text.primary'}}>
                    {item}
                </Button>
            ))}
        </Box>
    );
}

export default MenuItem