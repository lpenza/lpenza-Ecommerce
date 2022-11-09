import NavbarBrand from './NavBarBrand/NavBarBrand';
import CartWidget from './CartWidget/CartWidget';
import {NavDropdown,Nav,Form,Button} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';


const NavBar = (props) => {
  const { categories } = props;
  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <NavbarBrand />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <NavDropdown title="CATEGORIES" id="navbarScrollingDropdown">
                {categories.map((categorie, index) => {
                  return (
                    <NavLink
                      to={`/category/${categorie.toLowerCase()}`}
                      key={index}
                    >
                      <li className="dropdown-item">{categorie}</li>
                    </NavLink>
                  );
                })}
              </NavDropdown>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/help">
                  HELP
                </NavLink>
              </li>
            </ul>
            <Form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button className="btn me-4" type="submit">
                Search
              </Button>
            </Form>
            <Link to={'/cart'}>
              <CartWidget />
            </Link>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
