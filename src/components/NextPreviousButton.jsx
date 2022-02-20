import React from 'react';
import CustomizedButton from './CustomizedButton';


// test disabled
const NextPreviousButton = ({onClick, button,prevQuestion, endIcon, startIcon}) => {

    return (
        <CustomizedButton
            onClick={onClick}
            endIcon={endIcon}
            startIcon={startIcon}
     
        
            >
                {button}
        </CustomizedButton>
    )
}

export default NextPreviousButton;