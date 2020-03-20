import React from 'react';

import styled from 'styled-components';

const captureScreen = () => {
    return (
        <AllContainer>
            <h1>Test</h1>
            <ButtonContainer>
                <ButtonCapture>Capturer</ButtonCapture>
            </ButtonContainer>
        </AllContainer>
    );
};


const ButtonContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`

const ButtonCapture = styled.button`

background-color: #0073b1;
  height: 45px;
  padding: 0px 10px;
  outline: none;
  border: none;
  margin: 1px 0px;
`

const AllContainer = styled.div`
  background-image: url('../captureBackground.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export default captureScreen;