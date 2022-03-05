import React from 'react';
import CustomizedButton from './CustomizedButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const addStyles = {
    '@media screen and (max-width: 500px)': {
          width: '100%',
        },   
}

const NextPreviousButton = ({onClick, button, endIcon, startIcon,onKeyDown, disabled}) => {

    const matches = useMediaQuery('only screen and (max-width: 500px)');
    const buttonText = matches ? "" : button;
    return (
        <CustomizedButton
            onClick={onClick}
            onKeyDown={onKeyDown}
            endIcon={endIcon}
            startIcon={startIcon}
            sx={addStyles}
            disabled={disabled}
            >
            {buttonText}
        </CustomizedButton>
    )
}

export default NextPreviousButton;