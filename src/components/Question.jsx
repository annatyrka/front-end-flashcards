import React from 'react';
import {Box, Typography} from '@mui/material';

const boxStyles = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flexGrow: '1',
    p:4,
}
const Question = ({phase, question, answer}) => {

    const text = phase === "front" ? question : answer
    return (
        <Box sx={boxStyles}>
            <Typography variant="h6">{text}</Typography>
        </Box>
    )
};

export default Question;