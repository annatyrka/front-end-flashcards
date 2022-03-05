import './App.css';
import React, {useState, useEffect} from 'react';
import { Box } from '@mui/material';
import FlashCard from './components/FlashCard';
import Question from './components/Question';
import CurrentQuestionButton from './components/CurrentQuestionButton';
import NextPreviousButton from './components/NextPreviousButton';
import Header from './components/Header';
import QuizTypes from './components/QuizTypes';
import SingleCard from './components/SingleCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const quizTypes = ["HTML", "CSS", "JavaScript"];

// layout styling
const LayoutContainer = styled('div')(() => ({
  height: '100vh',
  overflow: 'hidden',
  width: '100%',
  background: 'linear-gradient(120deg,#414f5e, #35414f,#414f5e)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

const buttonStyles = theme => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 150px)',
  justifyItems: 'stretch',
  columnGap: 3,
  p: 4,
  pt:2,
  [`${theme.breakpoints.down('sm')} and (orientation: portrait)`]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: 2,
  },
  [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
p: 2
  },
  '@media screen and (max-width: 320px)': {
    gridTemplateColumns: 'auto 150px auto',
    columnGap: 1,
  }
});

//  themes
const htmlTheme = createTheme({
  palette: {
    primary: {
      main: '#263238'
    },
    secondary:{
      main: '#e1bee7',
    }
  }
});


const cssTheme = createTheme({
  palette: {
    primary: {
      main: '#263238'
    },
    secondary:{
      main: '#b2ebf2',
    }
  }
});

const jsTheme = createTheme({
  palette: {
    primary: {
      main: '#263238'
    },
    secondary:{
      main: '#ffcdd2',
    }
  }
});


function App() {

  const [quizType, setQuizType] = useState(null);
  const [question, setQuestion] = useState(null);
  const [questionCode, setQuestionCode] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [answerCode, setAnswerCode] = useState(null);
  const [source, setSource] = useState(null);
  const [phase, setPhase] = useState('front');
  // previous cards 
  const [prevQuestion, setPrevQuestion] = useState([]);
  const [prevAnswer, setPrevAnswer] = useState([]);
  const [prevQuestionCode, setPrevQuestionCode] = useState([]);
  const [prevAnswerCode, setPrevAnswerCode] = useState([]);
  const [prevSource, setPrevSource] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  

  const fetchRandomQuestion = () => {

    fetch("./data.json"
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(res => res.json())
      .then(data => {
        
        const allQuestions = data[quizType];
        const randomNumber = Math.floor(Math.random()*allQuestions.length);
        setQuestion(allQuestions[randomNumber].question.text);
        setQuestionCode(allQuestions[randomNumber].question.code)
        setAnswer(allQuestions[randomNumber].answer.text);
        setAnswerCode(allQuestions[randomNumber].answer.code);
        setSource(allQuestions[randomNumber].answer.source);
      })

      .catch(error => console.log( error.toString()));
  }

  useEffect(() => {

    if (quizType) {
      fetchRandomQuestion();
    }

  },[quizType]);

  // toggle question / answer
  const toggleFrontBack = () => {
    phase === "front" ? 
    setTimeout(() => setPhase("back"),100)
     : setTimeout(() => setPhase("front"),100)
  }

  // fetch next question
  const handleNewQuestion = () => {
   
    setPrevQuestion([...prevQuestion, question]);
    setPrevAnswer([... prevAnswer,answer]);
    setPrevQuestionCode([... prevQuestionCode,questionCode]);
    setPrevAnswerCode([...prevAnswerCode, answerCode]);
    setPrevSource([...prevSource, source]);
    setQuestion(null);
    setQuestionCode(null);
    if (isDisabled) setIsDisabled(false);
    // console.log('prevQuestion: ',prevQuestion)

    setTimeout(() => {
      fetchRandomQuestion();
      if (phase === "back") {
        setPhase("front")
      }
    },150);
  };

  const handlePrevQuestion = () => {
    console.log(prevQuestion.length)
    if (prevQuestion.length === 0 && prevAnswer.length === 0) return;
    else {
      if (phase === "back") {
        setPhase("front");
      }
      setQuestion(prevQuestion[prevQuestion.length-1])
      setPrevQuestion(prevQuestion.slice(0,-1))
      setAnswer(prevAnswer[prevAnswer.length-1]);
      setPrevAnswer(prevAnswer.slice(0,-1));
      setQuestionCode(prevQuestionCode[prevQuestionCode.length-1]);
      setPrevQuestionCode(prevQuestionCode.slice(0,-1));
      setQuestionCode(prevQuestionCode[prevQuestionCode.length-1]);
      setPrevQuestionCode(prevQuestionCode.slice(0,-1));
      setAnswerCode(prevAnswerCode[prevAnswerCode.length-1]);
      setPrevAnswerCode(prevAnswerCode.slice(0,-1));
      setSource(prevSource[prevSource.length-1]);
      if (prevQuestion.length === 1 && prevAnswer.length === 1) setIsDisabled(true);
      // console.log('prevQuestion: ',prevQuestion)
  }
  }
  // reset

  const reset = () => {
    setQuizType(null);
    setPhase('front');
      setQuestion(null);
      setAnswer(null);
      setQuestionCode(null);
      setAnswerCode(null);
      setSource(null);
      setPrevQuestion([]);
      setPrevAnswer([]);
      setPrevQuestionCode([]);
      setPrevAnswerCode([]);
      setPrevSource([]);
      setIsDisabled(true);
  }

  const returnToMainPage = () => {
      reset();
  }

  // event listeners
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrevQuestion();
      // console.log("left")
    }
    else if (e.key === "ArrowRight") {
      handleNewQuestion();
      // console.log("right")
    }
    else if (e.key === "ArrowUp" || e.key === "ArrowDown" ) {
      phase === "front" ? setPhase("back") : setPhase("front");
    }
  };
  const outerTheme = quizType === 'JavaScript' ?  jsTheme : quizType === "HTML" ? htmlTheme : cssTheme;

  return (
   
      <ThemeProvider theme={outerTheme}>
    <LayoutContainer>
      {!quizType && (
        <QuizTypes>
          {quizTypes.map((item) => {
            const  innerTheme = item === 'JavaScript' ? jsTheme :   item === "HTML" ? htmlTheme : cssTheme;
            return (
                <ThemeProvider theme={innerTheme}>
                  <SingleCard quizType={item} key={item} onClick={() => setQuizType(item)} /> 
                </ThemeProvider>
            )
          })}
        </QuizTypes>
      )}

      {quizType &&
        (< >
        <Header 
          quizType={quizType}
          onClick={returnToMainPage}
        />
        <FlashCard 
          phase={phase}
        >
          <Question 
            question={question}
            answer={answer}
            phase={phase}
            questionCode={questionCode}
            answerCode={answerCode}
            source={source}
          />
        <Box sx={buttonStyles}>
         < NextPreviousButton 
         onClick={handlePrevQuestion}
         onKeyDown={handleKeyDown}
         button="back"
         startIcon={<KeyboardDoubleArrowLeftIcon />}
          disabled={isDisabled}

         />
          <CurrentQuestionButton
            onClick={toggleFrontBack}
            phase={phase}
          />
        < NextPreviousButton 
         onClick={handleNewQuestion}
         onKeyDown={handleKeyDown}
         button="next"
         endIcon={<KeyboardDoubleArrowRightIcon />}
         />
        </Box>
        </FlashCard>
        </>)}
    </LayoutContainer>
    </ThemeProvider>

  );
}

export default App;
