import React from 'react';
import './style.css';
import './sideDrawer/DrawerToggleButton';
import DrawerToggleButton from './sideDrawer/DrawerToggleButton';
import logo from '../../images/logo.png'

const NavBar = props => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div>
        <DrawerToggleButton onClick={props.onClick} />
      </div>
      <div className='toolbar__logo'>
        <a href='/listPokemon'><img src={logo} alt="Pokemon"/></a>
      </div>

      <div className='spacer' />

      <div className='toolbar__navigation-items'>
        <ul>
          <li>
            <a href='/listPokemon'>Pokédex</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/register'>Register</a>
          </li>
          <li>
            <a href='/profile'>Profile</a>
          </li>
          <li>
            <a href='/settings'>Settings</a>
          </li>
          <li>
            <a href='/disconnect'>Disconnect</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
