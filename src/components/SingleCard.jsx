import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    width: '350px',
    height: '150px',
    textAlign: 'center',
    pb: 2,
    pt: 3,
    m: 3,
}



const SingleCard = ({type, onClick}) => {


    return (
        <Card variant="outlined" sx={cardStyles}>
           <CardContent sx={{flexGrow:"1"}}>
            <Typography variant="h3">
                    {type}
            </Typography>
            </CardContent>
            <CardActions>
        <Button size="large" variant="contained" onClick={onClick} >Start</Button>
      </CardActions> 
        </Card>
    )
}

export default SingleCard;