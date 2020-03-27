import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => {
  return (
    <button className='toggle-button' onClick={props.onClick}>
      <div className='toggle-button__line'></div>
      <div className='toggle-button__line'></div>
      <div className='toggle-button__line'></div>
    </button>
  );
};

export default DrawerToggleButton;
