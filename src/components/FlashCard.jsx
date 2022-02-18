import React from "react";
import { Paper } from "@mui/material";

const styles = {
    width: '600px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
}
// check again what it means
const FlashCard = ({ children }) => {
    
    return (
    <Paper sx={styles} elevation={15}>
        {children}
    </Paper>
    )
};

export default FlashCard;
