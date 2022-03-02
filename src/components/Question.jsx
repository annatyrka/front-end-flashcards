import React, {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import { marked } from "marked";

const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
    width: '85%',
    pt: 2,
    pb: 0,
}

marked.setOptions({
    breaks: true,
  });


const Question = ({phase, question, answer, questionCode, answerCode, source }) => {

    const [textFontSize, setTextFontSize] = useState('1.25rem');
    const [codeFontSize, setCodeFontSize] = useState('0.9rem');
  
    useEffect(() => {
        setFontSize();
    }, [phase, question, answer])

    const setFontSize = () => {
    // question font size
        if (question && phase === "front") {
            setTextFontSize('1.25rem');
            setCodeFontSize('1rem');
        }
    // answer font size 
    if (answer && phase === "back") {
        let textLength = answer.length;
        let codeLength
    
        answerCode ? codeLength = answerCode.length : codeLength = 0;
        
        if (codeLength === 0) {
            textLength < 100 ? setTextFontSize('1.25rem') : setTextFontSize('1.125rem')
        } else {
            if (textLength + codeLength < 100) {  
                setTextFontSize('1.25rem');
                 setCodeFontSize('0.9rem');  
            }
            if (textLength + codeLength >= 100){
                setTextFontSize('1.125rem');
                setCodeFontSize('0.9rem'); 
            }; 

        }
    
    }
    }

    const text = phase === "front" ? question : answer
    const code = phase === "front" ? questionCode : answerCode
    const textStyle = phase === "front" ? "center" : "justify"
    const getMarkdownText = (input) => {
        const rawMarkup = marked.parse(input);
        return { __html: rawMarkup}
    }


    return (
        <Box sx={boxStyles}>
           {text &&  (<Box  dangerouslySetInnerHTML={getMarkdownText(text)} sx={{fontWeight: 400, fontSize:textFontSize, width:"95%", textAlign: textStyle, lineHeight: "1.35"}} className="text-box"></Box>)}
            {code && (
 
                <Box dangerouslySetInnerHTML={getMarkdownText(code)}
                className="code-box"
                sx={{ backgroundColor: "#4f5b62",
                textAlign: "left",
                padding: '0 15px',
                marginBottom: '5px',
                width: "90%",
                borderLeft: "solid 5px",
                borderLeftColor: "secondary.main",
                fontSize:codeFontSize}}>

                </Box>
            )}

            {(phase === "back" && source) && (
               <Button variant="text"
               sx={{color: '#fff' ,alignSelf:'flex-end', "&:hover": {color: 'secondary.main'},}}
               href={source} target="_blank"
               rel="noopener"
               endIcon={<LinkIcon />}>
                    source
                </Button>
            )}
            
        </Box>
    )
};

export default Question;