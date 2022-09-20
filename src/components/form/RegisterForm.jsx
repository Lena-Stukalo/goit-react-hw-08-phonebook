import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';
const RegisterForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onInputChange = event => {
    const { name } = event.target;
    switch (name) {
      case 'login':
        setLogin(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'name':
        setName(event.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={onInputChange}
        />
      </label>
      <label className={css.label}>
        <span>Email:</span>
        <input
          type="email"
          name="login"
          required
          value={login}
          onChange={onInputChange}
        />
      </label>
      <label className={css.label}>
        <span>Password:</span>
        <input
          type="password"
          name="password"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={password}
          onChange={onInputChange}
        />
      </label>
      <button type="submit" className={css.button}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
