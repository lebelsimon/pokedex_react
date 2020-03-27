import React, {useEffect} from 'react'
import {bindActionCreators} from "redux";
import alltheActions from "../actions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

import styled from 'styled-components'
// import ReactPaginate from 'react-paginate'

const ProfileScreen = props => {
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(props.userState.user).length === 0 && props.userState.user.constructor === Object) {
      history.push('/login');
    }
  }, []);
  return (
    <Container>
      <h1>ProfileScreen</h1>
      <dl>
        <dd>Email</dd><dt>{props.userState.user.email}</dt>
        <dd>Username</dd><dt>{props.userState.user.username}</dt>
      </dl>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

ProfileScreen.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);