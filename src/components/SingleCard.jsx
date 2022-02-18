import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SingleCard = ({type, onClick}) => {


    return (
        <Card>
           <CardContent>
            <Typography>
                    {type}
            </Typography>
            </CardContent>
            <CardActions>
        <Button size="small" onClick={onClick} >Start</Button>
      </CardActions> 
        </Card>
    )
}

export default SingleCard;