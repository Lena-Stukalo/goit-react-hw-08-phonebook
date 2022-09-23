import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AuthSelectors from 'redux/auth/authSelectors';
import UserMenu from 'components/userMenu/UserMenu';
import AuthNav from './AuthNav';

const NavItem = styled(NavLink)`
  display: block;
  padding: 10px;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &.active {
    background-color: #f7a372;
    color: #fff;
  }
`;
const NavList = styled.nav`
  display: flex;
  border-bottom: solid 2px #f7a372;
`;

const Navigation = () => {
  const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
  return (
    <header>
      <NavList>
        <NavItem to="/" end>
          {' '}
          Home
        </NavItem>
        <NavItem to="/contacts">Contacts</NavItem>
        {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav />}
      </NavList>
    </header>
  );
};
export default Navigation;
