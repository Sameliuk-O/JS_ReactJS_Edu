import { Fragment, useState } from "react";

import { Box, Button, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { SwitchTheme } from "./SwitchTheme";
import { MENU_ITEMS_MOCK } from "../../mock/menuItems";
export default function TemporaryDrawer() {
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {MENU_ITEMS_MOCK?.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List>
                <SwitchTheme/>
            </List>
            <Divider/>
        </Box>
    );

    return (
        <Box sx={{display: {xs: 'block', sm: 'none',}}}>
            {['left'].map((anchor) => (
                <Fragment key={anchor}>
                    <Button sx={{color: "white"}} onClick={toggleDrawer(anchor, true)}>menu</Button>
                    <Drawer
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
        </Box>
    );
}