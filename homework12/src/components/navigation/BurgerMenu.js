import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import {useState} from "react";
import {Box} from "@mui/material";
import {navItems} from "./MenuItem";

const ITEM_HEIGHT = 48;
export const BurgerMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{display: {xs: 'block', sm: 'none',}}}>
            <IconButton
                aria-label="more"
                id="burger-button"
                className={"burger_button"}
                aria-controls={open ? 'burger-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <svg data-testid="FormatAlignJustifyIcon"><FormatAlignJustifyIcon/></svg>
            </IconButton>
            <Menu
                id="burger-menu"
                MenuListProps={{
                    'aria-labelledby': 'burger-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {navItems.map((navItem) => (
                    <MenuItem key={navItem} selected={navItem === 'Pyxis'} onClick={handleClose}>
                        {navItem}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default BurgerMenu