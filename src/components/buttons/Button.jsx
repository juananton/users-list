import { KIND_CLASSNAMES } from '../../constants/buttonClassNames';
import style from './Button.module.css';

const Button = ({ kind = 'primary', className, ...props }) => {
  return (
    <button
      {...props}
      className={`${style.button} ${KIND_CLASSNAMES[kind]} ${className}`}
    >
      Botón
    </button>
  );
};

export default Button;
