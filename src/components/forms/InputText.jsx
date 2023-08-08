import style from './InputText.module.css';

const InputText = ({ label, error, className, ...props }) => (
  <label className={`${error ? style.error : ''} ${className}`}>
    <div className={style.label}>{label}</div>
    <input {...props} className={style.input} type='text' />
    <div className={style.message}>{error}</div>
  </label>
);

export default InputText;
