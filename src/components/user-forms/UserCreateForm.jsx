import { useState } from 'react';
import { USER_ROLES } from '../../lib/contexts/UserRoles';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import InputCheckBox from '../forms/InputCheckBox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import CrossIcon from '../icons/CrossIcon';
import style from './userCreateForm.module.css';

function UserCreateForm({ onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { name, username, setName, setUsername } = useCreateForm();

  const isDisabled =
    !name.value ||
    name.error ||
    !username.value ||
    username.error ||
    username.loading ||
    isSubmitting;

  return (
    <div className={style.wrapper}>
      <IconButton
        className={style.close}
        kind='primary'
        icon={CrossIcon}
        onClick={onClose}
      />
      <form
        onSubmit={e =>
          handleSubmit(e, name, username, setIsSubmitting, onClose)
        }
      >
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
            loading={username.loading}
            error={username.error}
            onChange={e => setUsername(e.target.value)}
            success={username.value && !username.loading && !username.error}
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
          <Button type='submit' disabled={isDisabled}>
            {isSubmitting ? 'Cargando...' : 'Crear usuario'}
          </Button>
        </div>
      </form>
    </div>
  );
}

async function handleSubmit(e, name, username, setIsSubmitting, onClose) {
  e.preventDefault();

  setIsSubmitting(true);

  const user = {
    id: crypto.randomUUID(),
    name: name.value,
    username: username.value,
    role: e.target.role.value,
    active: e.target.active.checked,
  };

  const res = await fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (res.ok)
    // TOD0: Actualizar los usuarios
    onClose();
  else {
    setIsSubmitting(false);
  }
}

export default UserCreateForm;
