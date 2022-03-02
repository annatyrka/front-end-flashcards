import React from 'react';
import { Box, Typography } from '@mui/material'


const styledBox = {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    m: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const mainHeader = theme => ({
    fontWeight: 500,
    color:"primary.contrastText",
    [theme.breakpoints.down('md')]: {
        fontSize: '2.5rem'
    },
    "@media screen and (min-width: 768px) and (orientation: portrait)": {
        fontSize: '3.25rem',
        p:2,
    },
})
const quizCards = theme => ({
    display: 'flex',
    flexDirection: 'row',
    height: '50%',
    "@media screen and (orientation: portrait)": {
        flexDirection: 'column',
    },
    "@media screen and (orientation: landscape)": {
        flexDirection: 'row',
    },  
   [`${theme.breakpoints.down('md')} and (orientation: portrait)`]: {
        flexDirection: 'column',
        height: 'auto',
        mt: 3
    },
    "@media screen and (max-width: 320px) and (orientation: portrait)": {
        mt: 1,
    },  
    justifyContent: 'center',
    alignItems: 'center',
   
})

const QuizTypes = ({children}) => {

    return (
    <Box sx={styledBox} >
        <Typography variant="h2" component="h1" sx={mainHeader}>Front End Flashcards</Typography>
        <Box sx={quizCards}>
            {children}
        </Box>
     
    </Box>
    )
}

export default QuizTypes;