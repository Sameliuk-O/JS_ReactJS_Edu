import { Container, styled } from "@mui/material";

export const MenuContainer = styled(Container)({
    ".logo-container-position": {
        display: 'flex',
        justifyContent: "space-between",

        ".mobile-position-menu": {
            display: 'flex',
        }
    },

    ".logo": {
        height: 50,
        width: 50,
    },

    ".burger_button": {
        height: 50,
        width: 50,
    },

    ".nav-link": {
        justifyContent: "flex-end",
        ".menu_item_button": {
            color: "text.primary"
        }
    }
})