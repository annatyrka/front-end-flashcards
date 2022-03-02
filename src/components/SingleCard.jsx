import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardStyles = theme => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    width: '350px',
    height: '150px',
    textAlign: 'center',
    pb: 3,
    pt: 3,
    m: 3,
    [theme.breakpoints.down('lg')]: {
        width: '275px',
        height: '125px',
        m:2,
    },
    [theme.breakpoints.down('md')]: {
        width: '250px',
        height: '100px',
        m:1,
    },

    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
        width: '175px',
        height: '75px',
    },

    "@media screen and (min-width: 768px) and (orientation: portrait)": {
        width: '275px',
        height: '125px',
        m:2,
    },
    "@media screen and (max-width: 320px) and (orientation: portrait)": {
        width: '225px',
        height: '85px',
    }, 
    backgroundColor: 'primary.dark',
})

const styledText = theme => ({
    fontWeight: "500",
    color: '#fff',
    [theme.breakpoints.down('lg')]: {
        fontSize: '2rem',
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
        fontSize: '1.75rem'
    },
});

const cardContent = theme => ({
    flexGrow: "1",
    [theme.breakpoints.down('md')]: {
       p:0.5,
    },
    "@media screen and (min-width: 768px) and (orientation: portrait)": {
        p:2,
    },
});

const styledButton = theme => ({
    width: '150px',
    borderRadius: '20px',
    fontWeight: '600',
    p: 1.25,
    color: 'primary.dark',
    backgroundColor: 'secondary.main',
    '&:hover': {
        backgroundColor: 'secondary.light'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
        p:0.75,
        width: '125px',
     },
 
     "@media screen and (min-width: 768px) and (orientation: portrait)": {
        fontSize: '1.125rem',
        p:1,
    },
   
});



const SingleCard = ({quizType, onClick}) => {

 
    return (
        <Card variant="contained" elevation={20} sx={cardStyles}>
           <CardContent sx={cardContent}>
            <Typography variant="h3" sx={styledText}>
                    {quizType}
            </Typography>
            </CardContent>
            <CardActions>
        <Button size="large" variant="contained" onClick={onClick} sx={styledButton}>Start</Button>
      </CardActions> 
        </Card>
    )
}

export default SingleCard;