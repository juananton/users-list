import ArrowDownIcon from '../icons/ArrowDownIcon';
import style from './Select.module.css';

const Select = ({ className, ...props }) => (
  <div className={`${style.wrapper} ${className || ''}`}>
    <ArrowDownIcon className={style.icon} />
    <select {...props} className={style.select}></select>
  </div>
);

export default Select;
