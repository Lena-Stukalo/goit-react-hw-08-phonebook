import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthSelectors from 'redux/auth/authSelectors';
import UserMenu from 'components/userMenu/UserMenu';
import AuthNav from './AuthNav';
import css from './Navigation.module.css'

const Navigation = () => {
  const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/" className={css.link}>
              Home
            </NavLink>
          </li>
          {!isLoggedIn && <AuthNav />}
          {isLoggedIn &&<li className={css.item}>
            <NavLink to="/contacts" className={css.link}>
              Contacts
            </NavLink>
          </li>}
        </ul>
        {isLoggedIn && (
          <div className="">
            <UserMenu></UserMenu>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Navigation;
