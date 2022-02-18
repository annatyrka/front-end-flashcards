import React from 'react';
import {Paper,Button, Typography} from '@mui/material';

const Header = ({quizType, onClick}) => {

    return (
<Paper>
    <Button onClick={onClick}>go back</Button>
    <Typography>Learning {quizType}</Typography>
</Paper>

    )
}

export default Header;