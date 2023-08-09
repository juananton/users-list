import { KIND_CLASSNAMES } from '../../constants/buttonClassNames';
import style from './Button.module.css';

const IconButton = ({
  kind = 'secondary',
  icon: Icon,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${style.button} ${style.iconButton} ${KIND_CLASSNAMES[kind]} ${className}`}
    >
      <Icon className={style.icon}></Icon>
    </button>
  );
};

export default IconButton;
