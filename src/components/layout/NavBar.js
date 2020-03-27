import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container>
      <nav className="navbar navbar-expend-md navbar-dark fixed-top">
        <Link to="/listPokemon" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          Pokédex
        </Link>
        <Link
          to='/login'
          className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'
        >
          Login
        </Link>
        <Link to="/profile" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          Profile
        </Link>
        <Link
          to='/disconnect'
          className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'
        >
          Disconnect
        </Link>
        <Link
          to='/settings'
          className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'
        >
          Settings
        </Link>
        <Link to="/capture" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          Chasser
        </Link>
      </nav>
    </Container>
  )
};

const Container = styled.div`
position: absolute;
display: flex;
justify-content:space-between;
 @media (max-width: 768px) {
    
  padding: 0 30px;
  height: 90px;
  }

  @media (max-width: 425px) {
    
  padding: 0 10px;
  height: 45px;
  }
`;

export default NavBar;
