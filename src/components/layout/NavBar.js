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
        <Link
          to='/register'
          className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'
        >
          Register
        </Link>
        <Link
          to='/profile'
          className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'
        >
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
      </nav>
    </Container>
  )
};

const Container = styled.div`
position: absolute;`;

export default NavBar;
