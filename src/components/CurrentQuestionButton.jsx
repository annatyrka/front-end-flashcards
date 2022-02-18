import React from 'react'; 
import CustomizedButton from './CustomizedButton';


const CurrentQuestionButton = ({phase, onClick}) => {

    const button = phase === "front" ? "show answer" : "show question"

    return (
        <CustomizedButton onClick={onClick} >
            {button}
        </CustomizedButton>
    )

}

export default CurrentQuestionButton;