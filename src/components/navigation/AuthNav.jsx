import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Nav.Item as="li">
        <Nav.Link to="login" as={NavLink}>
          Log in
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link to="register" as={NavLink}>
          Register
        </Nav.Link>
      </Nav.Item>
    </>
  );
};
export default AuthNav;
