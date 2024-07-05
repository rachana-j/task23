// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
`;

// const Logo = styled.div`
//   font-size: 24px;
//   font-weight: bold;
// `;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
`;

const Navbar = () => {
  return (
    <Nav>
     
      <NavLink to="/dashboard">MyApp</NavLink>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
