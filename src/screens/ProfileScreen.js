import React from 'react'
import {bindActionCreators} from "redux";
import alltheActions from "../actions";
import {connect} from "react-redux";
// import ReactPaginate from 'react-paginate'

const ProfileScreen = props => {
  console.log(props.userState.user);
  return (
    <div>
      <h1>ProfileScreen</h1>
      <dl>
        <dd>Email</dd><dt>{props.userState.user.email}</dt>
        <dd>Username</dd><dt>{props.userState.user.username}</dt>
      </dl>
    </div>
  );
};

const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});

ProfileScreen.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);