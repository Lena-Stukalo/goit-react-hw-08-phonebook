import { useSelector, useDispatch } from 'react-redux';
import AuthSelectors from 'redux/auth/authSelectors';
import authOperation from '../../redux/auth/authOperations';
import Button from 'react-bootstrap/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(AuthSelectors.getUserName);
  return (
    <div>
      <span>{name} </span>
      <Button
        variant="danger"
        onClick={() => {
          dispatch(authOperation.logout());
        }}
      >
        Log out{' '}
      </Button>
    </div>
  );
};
export default UserMenu;
