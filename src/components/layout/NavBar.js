import React, { Component } from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';


// const NavBarStyle = styled.nav`

// `;



const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expend-md navbar-dark fixed-top">
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          Pokédex
        </Link>
        <Link to="/login" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          Login
        </Link>
        <Link to="/register" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          Register
        </Link>
      </nav>
    </div>
  )
};

export default NavBar;
