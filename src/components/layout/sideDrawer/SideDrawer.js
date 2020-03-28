import React from 'react';
import './SideDrawer.css';

const SideDrawer = () => (
  <nav className='side-drawer'>
    <ul>
      <li>
        <a href='/listPokemon'>Pokédex</a>
      </li>
      <li>
        <a href='/login'>Login</a>
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
      <li>
        <a href='/capture'>Capture</a>
      </li>
    </ul>
  </nav>
);

export default SideDrawer;
