import React from 'react';
import './style.css';
import './sideDrawer/DrawerToggleButton';
import DrawerToggleButton from './sideDrawer/DrawerToggleButton';
import logo from '../../images/logo.png'

const NavBar = props => {
  
  console.log(props);
  return (
    <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div>
        <DrawerToggleButton onClick={props.onClick} />
      </div>
      <div className='toolbar__logo'>
        <a href='/listPokemon'><img src={logo} alt="Pokemon"/></a>
      </div>
    </nav>
  </header>
  );
};

export default NavBar;
