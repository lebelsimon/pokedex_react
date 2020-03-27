import React from 'react';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const NotFoundScreen = () => {
  return (
    <Styled404>
      <img
        alt='John Travolta is confused'
        src='https://thumbs.gfycat.com/FailingDeterminedIbadanmalimbe-max-1mb.gif'
      />
    </Styled404>
  );
};

const Styled404 = styled.div`
  height: ${props => props.theme.height};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.height};
  background-image: url(${props => props.theme.backgroundimage});
  background-position: ${props => props.theme.backgroundposition};
  background-repeat: ${props => props.theme.backgroundrepeat};
  background-size: ${props => props.theme.backgroundsize};
  overflow: auto;
`;

const mapStateToProps = state => ({
  themeState: state.theme
});

export default connect(mapStateToProps, null)(NotFoundScreen);
