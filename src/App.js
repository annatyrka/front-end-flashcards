import './App.css';
import React, {useState, useEffect} from 'react';
import { Box, Container } from '@mui/material';
import FlashCard from './components/FlashCard';
import Question from './components/Question';
import CurrentQuestionButton from './components/CurrentQuestionButton';
import NextPreviousButton from './components/NextPreviousButton';
import Header from './components/Header';
import QuizTypes from './components/QuizTypes';
import SingleCard from './components/SingleCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';


const quizTypes = ["HTML", "CSS", "JavaScript"];



const LayoutContainer = styled('div')(() => ({
  height: '100vh',
  overflow: 'hidden',
  width: '100%',
  backgroundColor: '#282A35',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center', 

}));


const buttonStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 150px)',
  justifyItems: 'stretch',
  columnGap: 5,
  p: 5,
}

const theme = createTheme({

})

function App() {

  const [quizType, setQuizType] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [phase, setPhase] = useState('front');  // front & back
  const [prevQuestion, setPrevQuestion] = useState(null);
  const [prevAnswer, setPrevAnswer] = useState(null);

  const fetchRandomQuestion = () => {

    fetch('questions.json')
      .then(res => res.json())
      .then(data => {
        
        const allQuestions = data[quizType];
        const randomNumber = Math.floor(Math.random()*allQuestions.length);
        setQuestion(allQuestions[randomNumber].question);
        setAnswer(allQuestions[randomNumber].answer);

      })

      .catch(error => console.log( error.toString()));
  }

  useEffect(() => {

    if (quizType) {
      fetchRandomQuestion();
    }
    

  },[quizType]);

  
  const toggleFrontBack = () => {

    phase === "front" ? setPhase("back") : setPhase("front");
  }

  const handleNewQuestion = () => {

    if (phase === "back") {
      setPhase("front")
    }
    setPrevQuestion(question);
    setPrevAnswer(answer);
    fetchRandomQuestion();

  };

  // check behaviour with multiple questions
  const handlePrevQuestion = () => {

    if (!prevQuestion && !prevAnswer) return
    else {
      setQuestion(prevQuestion);
      setAnswer(prevAnswer);
    }
  }

  const returnToMainPage = () => {
    setQuizType(null);
  }


  return (
    <ThemeProvider theme={theme}>
    <LayoutContainer>
      {!quizType && (
        <QuizTypes>
          {quizTypes.map((item) => {

            return (
              
                <SingleCard type={item} key={item} onClick={() => setQuizType(item)} /> 
              
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
        <FlashCard >
          <Question 
            question={question}
            answer={answer}
            phase={phase}
          />
        <Box sx={buttonStyles}>
         < NextPreviousButton 
         onClick={handlePrevQuestion}
         button="back"
         />
          <CurrentQuestionButton
            onClick={toggleFrontBack}
            phase={phase}
          />
        < NextPreviousButton 
         onClick={handleNewQuestion}
         button="next"
         />
        </Box>
        </FlashCard>
        </>)}
    </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
