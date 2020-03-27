import React, {useEffect} from 'react'
import {bindActionCreators} from "redux";
import alltheActions from "../actions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

import styled from 'styled-components'
// import ReactPaginate from 'react-paginate'

const ProfileScreen = props => {
  const history = useHistory();
  return (
    <Container>
      <h1>ProfileScreen</h1>
      <DivInfo>
        <h4>Email : </h4>
        <h4>{props.userState.user.email}</h4>
      </DivInfo>
      <DivInfo>
      <h4>Username : </h4>
        <h4>{props.userState.user.username}</h4>
      </DivInfo>
      <DivInfo>
        <h4>Total Pokemon discovered : </h4>
        <h4>0 / 251</h4>
      </DivInfo>
      <DivInfo>
        <h4>Total Pokemon captured :</h4>
        <h4> 0 / 251</h4>
      </DivInfo>
    </Container>
  );
};

const DivInfo = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`

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
