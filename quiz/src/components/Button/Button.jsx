import classNames from 'classnames';
import style from './Button.module.css';
import PropTypes from "prop-types";

const Button = ({ 
  text, 
  onClick, 
  additionalClass, 
  disabled 
}) => {
  return (
    <button 
      type="button" 
      disabled={disabled}
      className={classNames(style.btn, additionalClass)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  additionalClass: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;

