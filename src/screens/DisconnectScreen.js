import React, {useEffect} from 'react'
import {bindActionCreators} from "redux";
import alltheActions from "../actions";
import {connect} from "react-redux";
import styled from 'styled-components'
// import ReactPaginate from 'react-paginate'

const DisconnectScreen = props => {
  useEffect(() => {
    props.actions.userActions.unsetUser();
  }, []);
  return (
    <Container>
      
    <h1>See ya!</h1>
    </Container>
  )
};

DisconnectScreen.propTypes = {};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  height: ${props => props.theme.height};
  background-image: url(${props => props.theme.backgroundimage});
  background-position: ${props => props.theme.backgroundposition};
  background-repeat: ${props => props.theme.backgroundrepeat};
  background-size: ${props => props.theme.backgroundsize};
`;

const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions,
  themeState: state.theme
});

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectScreen);
