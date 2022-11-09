import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/LP.png';

const NavBarBrand = () => {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarBrand;
