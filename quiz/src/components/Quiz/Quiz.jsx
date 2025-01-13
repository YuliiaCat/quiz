import { useState } from 'react';
import Item from '../Item/Item';
import style from './Quiz.module.css';
import PropTypes from "prop-types";
import Score from '../Score/Score';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(0);
  const length = questions.length;
  const isQuizFinished = currentQuestion === length;

  const goToNextQuestion = () => {
    if (currentQuestion < length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const increaseCount = (isCorrect) => {
    if (isCorrect) {
      setCount(((prevCount) => prevCount + 1));
    }
  }

  const resetQuestion = () => {
    setCurrentQuestion(0);
  }

  const resetCount = () => {
    setCount(0);
  }

  const startQuiz = () => {
    resetCount();
    resetQuestion();

  }

  return (
    <div className={style.list}>
      {isQuizFinished ? (
        <Score 
          count={count} 
          length={length} 
          startQuiz={startQuiz}
        />
      ) : (
        <Item 
          item={questions[currentQuestion]} 
          index={currentQuestion} 
          length={length} 
          goToNextQuestion={goToNextQuestion}
          increaseCount={increaseCount}
        />
      )}
      
    </div>
  );
}

Quiz.propTypes = {
  questions: PropTypes.array,
};


export default Quiz;

