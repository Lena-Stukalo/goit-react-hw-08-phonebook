import { useSelector } from 'react-redux';
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
        <Nav fill as="ul" >
          <Nav.Item as="li">
            <Nav.Link href="/"> Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="contacts">Contacts</Nav.Link>
          </Nav.Item>
          {!isLoggedIn && <AuthNav />}
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
