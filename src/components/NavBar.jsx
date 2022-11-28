import React,{useState} from 'react';
import NavbarBrand from './NavBarBrand/NavBarBrand';
import CartWidget from './CartWidget/CartWidget';
import {NavDropdown,Nav,Form } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useSearchContext } from '../context/searchContext';
import { useEffect } from 'react';



const NavBar = (props) => {
  const { addSearch } = useSearchContext();
  const [search,setSearch]=useState('')
  const { categories } = props;

  useEffect(()=>{
    handleSearch()
  },[search])


const handleSearch=()=>{
  addSearch(search)
}

  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <NavbarBrand />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={()=>{
                setSearch('')
              }}>
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
            </ul>
            <Form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
              />
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
