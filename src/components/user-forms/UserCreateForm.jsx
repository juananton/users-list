import { USER_ROLES } from '../../lib/contexts/UserRoles';
import { useFormValues } from '../../lib/hooks/useForms';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import InputCheckBox from '../forms/InputCheckBox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import CrossIcon from '../icons/CrossIcon';
import style from './userCreateForm.module.css';

function UserCreateForm({ onClose }) {
  const { name, username, setName, setUsername } = useFormValues();

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: name.value,
      username: username.value,
      role: e.target.role.value,
      active: e.target.active.checked,
    };

    console.log(newUser);
    onClose();
  }

  return (
    <div className={style.wrapper}>
      <IconButton
        className={style.close}
        kind='primary'
        icon={CrossIcon}
        onClick={onClose}
      />
      <form onSubmit={handleSubmit}>
        <div className={style.row}>
          <InputText
            className={style.input}
            label={'Nombre'}
            placeholder='John Doe'
            value={name.value}
            error={name.error}
            onChange={e => setName(e.target.value)}
          />
          <InputTextAsync
            className={style.input}
            label='Username'
            placeholder='johndoe...'
            value={username.value}
            error={username.error}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className={style.row}>
          <Select name='role'>
            <option value={USER_ROLES.TEACHER}>Profesor</option>
            <option value={USER_ROLES.STUDENT}>Alumno</option>
            <option value={USER_ROLES.OTHER}>Otro</option>
          </Select>
          <div className={style.active}>
            <InputCheckBox name='active' onChange={e => e.target.checked} />
            <span>¿Activo?</span>
          </div>
          <Button type='submit'>Crear usuario</Button>
        </div>
      </form>
    </div>
  );
}

export default UserCreateForm;
