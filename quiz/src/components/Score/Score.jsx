import Button from '../Button/Button';
import style from './Score.module.css';
import PropTypes from "prop-types";

const Score = ({ count, length, startQuiz }) => {
  return (
    <div className={style.score}>
      <h1>Quiz Finished!</h1>
      <p>You got {count} out of {length} correct answers!</p>
      <Button
        text='Start'
        onClick={startQuiz}
        additionalClass={style.btn}
      />
    </div>
  );
}

Score.propTypes = {
  count: PropTypes.number,
  length: PropTypes.number,
  startQuiz: PropTypes.func
};

export default Score;