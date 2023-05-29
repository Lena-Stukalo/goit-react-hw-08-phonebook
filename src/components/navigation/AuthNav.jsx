import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
const AuthNav = () => {
  return (
    <>
      <li className={css.item}>
        <NavLink to="login" className={css.link}>
          Log in
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="register" className={css.link}>
          Register
        </NavLink>
      </li>
    </>
  );
};
export default AuthNav;
