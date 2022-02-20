import React from "react";
import { Paper } from "@mui/material";

const styles = {
    width: '600px',
    height: '325px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: '#fff'
}
// check again what it means
const FlashCard = ({ phase, children }) => {
    
    const bg = phase === "front" ? 'primary.dark' : 'primary.main'
    return (
    <Paper sx={{...styles, backgroundColor: bg}} elevation={24}>
        {children}
    </Paper>
    )
};

export default FlashCard;
