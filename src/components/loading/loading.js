import React from 'react';

import styled from 'styled-components';
import loading from '../../images/pokeball_loading.gif';

const Loading = props => {
  return (
    <Container>
      <ImageLoading src={loading}></ImageLoading>
    </Container>
  );
};

const ImageLoading = styled.img`
  height: 100vh;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Loading;
