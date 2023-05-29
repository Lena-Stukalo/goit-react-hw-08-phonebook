import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/authOperations';
import css from './Form.module.css'

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
    <form onSubmit={hendleSubmit} className={css.form}>
      <div className={css.inputWraper}>
        <label>
          <span className={css.text}>Name:</span>
          <input
          className={css.input}
            type="text"
            name="name"
            required
            value={name}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className={css.inputWraper}>
        <label>
          <span className={css.text}>Email:</span>
          <input
          className={css.input}
            type="email"
            name="email"
            required
            value={email}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className={css.inputWraper}>
        <label>
          <span className={css.text}>Password:</span>
          <input
          className={css.input}
            type="password"
            name="password"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={password}
            onChange={onInputChange}
          />
        </label>
      </div>
      <button className={css.button} variant="primary" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
