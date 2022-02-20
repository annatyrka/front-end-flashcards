import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    width: '350px',
    height: '150px',
    textAlign: 'center',
    pb: 3,
    pt: 3,
    m: 3,
    backgroundColor: 'primary.dark',
}

const styledButton ={

    width: '150px',
    borderRadius: '20px',
    fontWeight: '600',
    p: 1.25,
    color: 'primary.dark',
    backgroundColor: 'secondary.main',
    '&:hover': {
        backgroundColor: 'secondary.light'
    },
}

const SingleCard = ({quizType, onClick}) => {

 
    return (
        <Card variant="contained" elevation={20} sx={cardStyles}>
           <CardContent sx={{flexGrow:"1"}}>
            <Typography variant="h3" sx={{fontWeight: "500", color: '#fff'}}>
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