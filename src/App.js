import './App.css';
import React, {useState, useEffect} from 'react';
import FlashCard from './components/FlashCard';
import Question from './components/Question';
import NewQuestionButton from './components/NewQuestionButton';
import PrevQuestionButton from './components/PrevQuestionButton';
import Header from './components/Header';
import QuizTypes from './components/QuizTypes';
import SingleCard from './components/SingleCard';

const quizTypes = ["HTML", "CSS", "JavaScript"];

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

  

  const handleNewQuestion = () => {

    if (phase === "back") {
      setPrevQuestion(question);
      setPrevAnswer(answer);
      fetchRandomQuestion();
      setPhase('front');
    }

    if (phase === "front") {
      setPhase("back");
    }
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
    <div className="App">
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
        (<>
        <Header 
          quizType={quizType}
          onClick={returnToMainPage}
        />
        <FlashCard>
          <Question 
            question={question}
            answer={answer}
            phase={phase}
          />
         < PrevQuestionButton 
         onClick={handlePrevQuestion}
         />
          <NewQuestionButton
            onClick={handleNewQuestion}
            phase={phase}
          />
        </FlashCard>
        </>)}
    </div>
  );
}

export default App;
