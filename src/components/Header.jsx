import React from 'react';
import {Paper,Box, Typography} from '@mui/material';
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
    borderRadius: "none",
    p: 2,
    backgroundColor: 'primary.dark',
    color: '#fff'
}



const Header = ({quizType, onClick}) => {

    return (
<Paper sx={headerStyle}>
    <CustomizedButton onClick={onClick}>go back</CustomizedButton>
    <Box>
        <Typography variant="h5" sx={{display: 'inline'}}>Learning</Typography>
        <Typography variant="h5" sx={{color: 'secondary.main', fontWeight: 600, display:"inline", ml:1}}>{quizType}</Typography>
    </Box>
</Paper>

    )
}

export default Header;