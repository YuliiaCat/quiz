import PropTypes from "prop-types";
import style from './Answer.module.css';
import classNames from "classnames";

const Answer = ({ answer, isSelected, isAnswerSelected }) => {
  const { text, isCorrect } = answer;

  return (
    <div>
      <ul className={style.answer}>
        <li 
          className={classNames(style.text, {
            [style.isCorrect]: isCorrect && isSelected && isAnswerSelected,
            [style.nonCorrect]: !isCorrect && isSelected && isAnswerSelected,
          })}
        >
          {text}
        </li>
      </ul>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
  isSelected: PropTypes.bool, 
  isAnswerSelected: PropTypes.bool
};

export default Answer;