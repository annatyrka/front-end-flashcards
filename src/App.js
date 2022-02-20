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
  backgroundColor: '#f0f0f0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center', 

}));

const buttonStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 150px)',
  justifyItems: 'stretch',
  columnGap: 3,
  p: 4,
  pt:2,
}

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
  const [prevQuestion, setPrevQuestion] = useState(null);
  const [prevAnswer, setPrevAnswer] = useState(null);
  const [prevQuestionCode, setPrevQuestionCode] = useState(null);
  const [prevAnswerCode, setPrevAnswerCode] = useState(null);
  const [prevSource, setPrevSource] = useState(null);


  const fetchRandomQuestion = () => {

    fetch('questions.json')
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

      window.addEventListener('keydown', handleKeyDown);
      // clean up
      return () => {
          window.removeEventListener('keydown', handleKeyDown);
      };
    }

  },[quizType]);

  // toggle question / answer
  const toggleFrontBack = () => {
    phase === "front" ? setPhase("back") : setPhase("front");
  }

  // fetch next question
  const handleNewQuestion = () => {

   
    setPrevQuestion(question);
    setPrevAnswer(answer);
    setPrevQuestionCode(questionCode);
    setPrevAnswerCode(answerCode);
    setPrevSource(source);

    setQuestion(null);
    setQuestionCode(null);
 

    setTimeout(() => {
      fetchRandomQuestion();
      if (phase === "back") {
        setPhase("front")
      }
    },100);
    
  };

  // check behaviour with multiple questions
  const handlePrevQuestion = () => {

    if (!prevQuestion && !prevAnswer) return
    else {
      setQuestion(prevQuestion);
      setAnswer(prevAnswer);
      setQuestionCode(prevQuestionCode);
      setAnswerCode(prevAnswerCode);
      setSource(prevSource);
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
      setPrevQuestion(null);
      setPrevAnswer(null);
      setPrevQuestionCode(null);
      setPrevAnswerCode(null);
      setPrevSource(null);
  }
  const returnToMainPage = () => {
      reset();
  }

  // event listeners
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrevQuestion();
    }
    if (e.key === "ArrowRight") {
      handleNewQuestion();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowDown" ) {
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
         button="back"
         startIcon={<KeyboardDoubleArrowLeftIcon />}
          prevQuestion={prevQuestion}
         />
          <CurrentQuestionButton
            onClick={toggleFrontBack}
            phase={phase}
          />
        < NextPreviousButton 
         onClick={handleNewQuestion}
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
