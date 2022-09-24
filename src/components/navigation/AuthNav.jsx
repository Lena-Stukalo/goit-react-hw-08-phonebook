import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

const AuthNav = () => {
  return (
    <>
      <Nav.Item as="li">
        <Nav.Link href="login">Log in</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="register">Register</Nav.Link>
      </Nav.Item>
    </>
  );
};
export default AuthNav;
