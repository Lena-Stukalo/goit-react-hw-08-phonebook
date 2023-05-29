import { useSelector, useDispatch } from 'react-redux';
import AuthSelectors from 'redux/auth/authSelectors';
import authOperation from '../../redux/auth/authOperations';

import css from './UserMenu.module.css'
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(AuthSelectors.getUserName);
  return (
    <div className={css.container}>
      <span className={css.name}>{name} </span>
      <button 
      className={css.button}
        variant="danger"
        onClick={() => {
          dispatch(authOperation.logout());
        }}
      >
        Log out{' '}
      </button>
    </div>
  );
};
export default UserMenu;
