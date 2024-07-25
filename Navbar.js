import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Inventory App</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/inventory">Inventory List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/edit">Edit Inventory</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
