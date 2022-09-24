import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthSelectors from 'redux/auth/authSelectors';
import UserMenu from 'components/userMenu/UserMenu';
import AuthNav from './AuthNav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
  return (
    <header>
      <Navbar bg="light" variant="light">
        <Nav fill as="ul">
          <Nav.Item as="li">
            <Nav.Link to="/" as={NavLink}>
              {' '}
              Home
            </Nav.Link>
          </Nav.Item>
          {!isLoggedIn && <AuthNav />}
          <Nav.Item as="li">
            <Nav.Link to="/contacts" as={NavLink}>
              Contacts
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {isLoggedIn && (
          <Navbar.Collapse className="justify-content-end">
            <UserMenu></UserMenu>
          </Navbar.Collapse>
        )}
      </Navbar>
    </header>
  );
};
export default Navigation;
