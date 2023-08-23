import { useState } from 'react';
import { validateName, validateUsername } from '../users/userValidations';

export function useFormValues() {
  const [formValues, setFormValues] = useState({
    name: {
      value: '',
      error: undefined,
    },
    username: {
      value: '',
      error: undefined,
    },
  });

  function setName(newName) {
    const error = validateName(newName);
    setFormValues({
      ...formValues,
      name: { value: newName, error: error },
    });
  }

  function setUsername(newUsername) {
    const error = validateUsername(newUsername);
    setFormValues({
      ...formValues,
      username: { value: newUsername, error: error },
    });
  }

  return { ...formValues, setName, setUsername };
}
