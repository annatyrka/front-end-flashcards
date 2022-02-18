import React from 'react';
import {Box, Typography} from '@mui/material';

const Question = ({phase, question, answer}) => {

    const text = phase === "front" ? question : answer
    return (
        <Box>
            <Typography>{text}</Typography>
        </Box>
    )
};

export default Question;