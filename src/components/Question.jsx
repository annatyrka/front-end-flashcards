import React from 'react';
import {Box, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinkIcon from '@mui/icons-material/Link';

const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'justify',
    alignItems: 'center',
    flexGrow: '1',
    width: '85%',
    pt: 3,
    pb: 0,
}
const Question = ({phase, question, answer, questionCode, answerCode, source }) => {

    const text = phase === "front" ? question : answer
    const code = phase === "front" ? questionCode : answerCode

    const setFontSize = (phase) => {
        let fontSize = "";

        if (phase === 'front') {
            console.log(question.length)
            return fontSize = question.length > 200 ? 'body1' : 'h6';
            
        } else {
            console.log(answer.length)
            return fontSize = answer.length > 200 ? 'body1' : 'h6';
        }
    }
   
    return (
        <Box sx={boxStyles}>
            <Typography variant="h6" sx={{fontWeight: 400, whiteSpace: "pre-wrap"}}>{text}</Typography>

            {code && (
                <code style={{display: "block", whiteSpace: "pre-wrap", backgroundColor: "#4f5b62", padding: '10px 20px', marginTop: '5px'}}>{code}</code>
            )}

            {(phase === "back" && source) && (
               <Button variant="outlined" sx={{color: '#fff'}} href={source} target="_blank" rel="noopener" endIcon={<LinkIcon />}>
        source
      </Button>
            )}
            
        </Box>
    )
};

export default Question;