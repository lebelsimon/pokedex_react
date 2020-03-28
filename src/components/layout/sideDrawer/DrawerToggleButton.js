import React from 'react';
import styled from 'styled-components'
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

const DivToggleButton = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    `

export default DrawerToggleButton;
