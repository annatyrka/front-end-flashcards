import React from 'react';
import CustomizedButton from './CustomizedButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const addStyles = {
    '@media screen and (max-width: 500px)': {
          width: '100%',
        },   
}

// test disabled
const NextPreviousButton = ({onClick, button, endIcon, startIcon}) => {

    const matches = useMediaQuery('only screen and (max-width: 500px)');
    const buttonText = matches ? "" : button;
    return (
        <CustomizedButton
            onClick={onClick}
            endIcon={endIcon}
            startIcon={startIcon}
            sx={addStyles}
            >
            {buttonText}
        </CustomizedButton>
    )
}

export default NextPreviousButton;