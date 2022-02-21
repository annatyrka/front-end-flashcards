import React from 'react';
import { Box, Typography } from '@mui/material'


const styledBox ={
    height: '100%',
    width: '100%',
    textAlign: 'center',
    m: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const quizCards = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
}

const QuizTypes = ({children}) => {

    return (
    <Box sx={styledBox} >
        <Typography variant="h2" component="h1" sx={{fontWeight: 500, color:"primary.contrastText"}}>Front End Flashcards</Typography>
        <Box sx={quizCards}>
            {children}
        </Box>
     
    </Box>
    )
}

export default QuizTypes;