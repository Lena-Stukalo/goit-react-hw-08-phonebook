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

const AuthNav = () => {
  return (
    <div>
      <NavItem to="/login">Log in</NavItem>
      <NavItem to="/register">Register</NavItem>
    </div>
  );
};
export default AuthNav;
