import React from 'react'; 
import { Button } from '@mui/material';


const NewQuestionButton = ({phase, onClick}) => {

    const button = phase === "front" ? "show answer" : "next question"
    return (
        <Button variant="contained" onClick={() => onClick()}>
            {button}
        </Button>
    )

}

export default NewQuestionButton;