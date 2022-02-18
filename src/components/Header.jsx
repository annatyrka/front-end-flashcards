import React from 'react';
import {Paper,Button, Typography} from '@mui/material';
import CustomizedButton from './CustomizedButton';

const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50px',
    p: 2,

}



const Header = ({quizType, onClick}) => {

    return (
<Paper sx={headerStyle}>
    <CustomizedButton onClick={onClick}>go back</CustomizedButton>
    <Typography variant="h5">Learning {quizType}</Typography>
</Paper>

    )
}

export default Header;