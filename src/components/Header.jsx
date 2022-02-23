import React from 'react';
import {Paper,Box, Typography} from '@mui/material';
import CustomizedButton from './CustomizedButton';

const headerStyle = theme => ({
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
    color: '#fff',
    [`${theme.breakpoints.down('xl')} and (orientation: portrait)`]: {
        height: '85px',
    },
    
    "@media screen and (max-width: 414px) and (orientation: portrait)": {
        flexDirection: 'column-reverse',
    },
    '@media screen and (max-width: 915px) and (orientation: landscape)':{
        padding: '5px'
    },
});

const addStyles = theme => ({
    '@media screen and (max-width: 414px)': {
          padding: '5px',
        },
        '@media screen and (max-width: 915px) and (orientation: landscape)': {
            padding: '5px',
            fontSize: '0.8125rem'
        }
})

const Header = ({quizType, onClick}) => {

    return (
<Paper sx={headerStyle}>
    <CustomizedButton onClick={onClick} sx={addStyles}>go back</CustomizedButton>
    <Box>
        <Typography variant="h5" sx={{display: 'inline'}}>Learning</Typography>
        <Typography variant="h5" sx={{color: 'secondary.main', fontWeight: 600, display:"inline", ml:1}}>{quizType}</Typography>
    </Box>
</Paper>

    )
}

export default Header;