import React from 'react';
import CustomizedButton from './CustomizedButton';


const NextPreviousButton = ({onClick, button}) => {

    return (
        <CustomizedButton onClick={onClick}> {button} </CustomizedButton>
    )
}

export default NextPreviousButton;