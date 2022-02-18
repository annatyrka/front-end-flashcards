import React from 'react';
import {Button} from '@mui/material';


const PrevQuestionButton = ({onClick}) => {

    return (
        <Button variant="contained" onClick={() => onClick()}>
            previous question
        </Button>
    )
}

export default PrevQuestionButton;