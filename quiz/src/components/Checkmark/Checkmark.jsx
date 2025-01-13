import { GiCheckMark } from "react-icons/gi";
import style from './Checkmark.module.css';
import PropTypes from "prop-types";
import classNames from "classnames";

const Checkmark = ({ isCorrect }) => {

  return (
    <div className={classNames(style.box, {
      [style.isCorrect]: isCorrect,
    })}>
      {isCorrect === true && <GiCheckMark className={style.checkmark} /> }
    </div>
  );
}

Checkmark.propTypes = {
  isCorrect: PropTypes.bool,
};

export default Checkmark;