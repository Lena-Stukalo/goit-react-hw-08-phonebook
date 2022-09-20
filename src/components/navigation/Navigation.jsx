import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  return (
    <header>
      <NavList>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/contacts">Contacts</NavItem>
        <NavItem to="/login">Log in</NavItem>
        <NavItem to="/register">Register</NavItem>
      </NavList>
    </header>
  );
};
export default Navigation;
