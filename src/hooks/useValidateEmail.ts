import React, { useState } from 'react';

export interface FormValues {
  email: string;
}

const useValidateEmail = () => {
  const [values, setValues] = useState<FormValues>({ email: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (name: string, value: string) => {
    switch (name) {
      case 'email':
        if (value.trim() === '') {
          // An empty value removes error
          let newObj = { ...errors };
          delete newObj.email;
          setErrors(newObj);
        } else if (
          // Checks email validity
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          ).test(value)
        ) {
          // Invalid email format error
          setErrors({ ...errors, email: 'Enter a valid email address' });
        } else {
          // Valid email format removes error
          let newObj = { ...errors };
          delete newObj.email;
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    validate(name, val);
    setValues({ ...values, [name]: val });
  };

  // Check if the email is not empty and the email format is valid
  const isEmailValid = values.email.trim() !== '' && !errors.email;

  return {
    values,
    errors,
    handleChange,
    isEmailValid,
  };
};

export default useValidateEmail;
