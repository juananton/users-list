import style from './Button.module.css';

const KIND_CLASSNAMES = {
  primary: style.primary,
  secondary: style.secondary,
};

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
