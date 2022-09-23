import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import authOperation from '../../redux/auth/authOperations';
import css from './Form.module.css';
const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onInputChange = event => {
    const { name } = event.target;
    switch (name) {
      case 'email':
        setEmail(event.target.value);
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

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <form className={css.form} onSubmit={hendleSubmit}>
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
          name="email"
          required
          value={email}
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
