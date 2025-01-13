import PropTypes from "prop-types";
import style from './Item.module.css';
import Answer from "../Answer/Answer";
import Checkmark from "../Checkmark/Checkmark";
import classNames from "classnames";
import { useState } from "react";
import Button from "../Button/Button";

const Item = ({ item, index, length, goToNextQuestion, increaseCount }) => {
  const { question, answers } = item;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleAnswerClick = (answer) => {
    if (!isAnswerSelected) {
      setSelectedAnswer(answer);
      setIsAnswerSelected(true);

      setCorrectAnswers((prevState) => {
        const newCorrectAnswers = [...prevState];
        newCorrectAnswers[index] = answer.isCorrect;
        return newCorrectAnswers;
      });

      increaseCount(answer.isCorrect);
    }
  };

  const handleNextClick = () => {
    goToNextQuestion();
    setSelectedAnswer(null);
    setIsAnswerSelected(false);
  };

  const circles = new Array(length).fill(0);

  return (
    <div className={style.frame}>
      <div className={style.card}>
        <h2 className={style.title}>Question {index + 1} of {length} </h2>
        <h2 className={style.question}>{question}</h2>
        <ul className={style.answers}>
          {answers.map((answer, index) => {
            return (
              <li 
                key={index}
                onClick={() => handleAnswerClick(answer)}
              >
                <Answer 
                  answer={answer} 
                  isSelected={selectedAnswer === answer}
                  isAnswerSelected={isAnswerSelected}
                  />
              </li>
            );
          })}
        </ul>

        <Button 
          text='Next'
          onClick={handleNextClick}
          disabled={!isAnswerSelected}
          additionalClass={classNames(style.btn, {
            [style.disabled]: !isAnswerSelected,
          })}
        />

        <ul className={style.checkmarkList}>
          {circles.map((_, circleIndex) => {
            return (
              <li key={circleIndex}>
                <Checkmark isCorrect={correctAnswers[circleIndex]} />
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  length: PropTypes.number,
  goToNextQuestion: PropTypes.func,
  increaseCount: PropTypes.func
};

export default Item;
