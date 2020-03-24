import React from 'react';

import styled from 'styled-components'
import loading from '../images/pokeball_loading.gif'

const Loading = () => {
    return (
        <Container>
            <img src={loading}></img>
        </Container>
    );
};


const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`


export default Loading;