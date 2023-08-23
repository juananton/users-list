import { useState } from 'react';
import { USER_ROLES } from '../../lib/contexts/UserRoles';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import InputCheckBox from '../forms/InputCheckBox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import CrossIcon from '../icons/CrossIcon';
import style from './userCreateForm.module.css';

function UserCreateForm({ onClose }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState(USER_ROLES.TEACHER);
  const [active, setActive] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: name,
      username: userName,
      role: role,
      active: active,
    };

    console.log(newUser);
    onClose();
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <IconButton
        className={style.close}
        kind='primary'
        icon={CrossIcon}
        onClick={onClose}
      />
      <div className={style.row}>
        <InputText
          className={style.input}
          label='Nombre'
          placeholder='John Doe'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputTextAsync
          className={style.input}
          label='Username'
          placeholder='johndoe...'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </div>
      <div className={style.row}>
        <Select value={role} onChange={e => setRole(e.target.value)}>
          <option value={USER_ROLES.TEACHER}>Profesor</option>
          <option value={USER_ROLES.STUDENT}>Alumno</option>
          <option value={USER_ROLES.OTHER}>Otro</option>
        </Select>
        <div className={style.active}>
          <InputCheckBox
            checked={active}
            onChange={e => setActive(e.target.checked)}
          />
          <span>¿Activo?</span>
        </div>
        <Button type='submit'>Crear usuario</Button>
      </div>
    </form>
  );
}

export default UserCreateForm;
