import { useEffect, useState } from 'react';
import {
  validateName,
  validateUsername,
  validateUsernameIsAvailable,
} from '../users/userValidations';

export function useCreateForm() {
  const [formValues, setFormValues] = useState({
    name: {
      value: '',
      error: undefined,
    },
    username: {
      value: '',
      loading: false,
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
      username: {
        value: newUsername,
        loading: !error,
        error: error,
      },
    });
  }

  function setUsernameError(error) {
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      username: {
        value: prevFormValues.username.value,
        error,
        loading: false,
      },
    }));
  }

  useEffect(
    function () {
      if (formValues.username.loading) {
        const controller = new AbortController();

        const timeoutId = setTimeout(
          validateUsernameIsAvailable(
            formValues.username.value,
            setUsernameError,
            controller.signal
          ),
          500
        );
        return () => {
          controller.abort();
          clearTimeout(timeoutId);
        };
      }
    },
    [formValues.username.loading, formValues.username.value]
  );

  return { ...formValues, setName, setUsername };
}
