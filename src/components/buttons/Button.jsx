import { KIND_CLASSNAMES } from '../../constants/buttonClassNames';
import style from './Button.module.css';

const Button = ({ kind = 'primary', className, ...props }) => {
  return (
    <button
      {...props}
      className={`${style.button} ${KIND_CLASSNAMES[kind]} ${className}`}
    ></button>
  );
};

export default Button;
