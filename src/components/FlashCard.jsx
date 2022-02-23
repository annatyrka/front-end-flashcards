import React from "react";
import { Paper } from "@mui/material";

let bg ="primary.dark"
const flashCardStyles = theme => ({
    width: '600px',
    height: '325px',
    [`${theme.breakpoints.down('sm')} and (orientation: portrait)`]: {
        width: '100%',
        height: '375px',
        position: 'relative',
        top: '30px'
    },
    '@media screen and (max-width: 915px) and (orientation: landscape)':{
        width: '550px',
        height: '275px',
        position: 'relative',
        top: '30px',
        overflow: 'scroll'
    },
    '@media screen and (max-width: 658px) and (orientation: landscape)': {
        width: '555px',
        height: '215px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: '#fff',
    backgroundColor: bg,
});

const FlashCard = ({ phase, children }) => {
    
   bg = phase === "front" ? 'primary.dark' : 'primary.main'
    return (
    <Paper sx={flashCardStyles}  elevation={24}>
        {children}
    </Paper>
    )
};

export default FlashCard;
// sx={{backgroundColor: bg}}