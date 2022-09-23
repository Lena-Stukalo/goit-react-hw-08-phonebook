import { useSelector, useDispatch } from 'react-redux';
import AuthSelectors from 'redux/auth/authSelectors';
import authOperation from '../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(AuthSelectors.getUserName);
  return (
    <div>
      <span>{name} </span>
      <button
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
