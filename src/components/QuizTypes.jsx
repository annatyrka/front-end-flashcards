import React from 'react';
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';


const styledBox ={
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}

const QuizTypes = ({children}) => {

    return (
    <Box sx={styledBox} >
        {children}
    </Box>
    )
}

export default QuizTypes;