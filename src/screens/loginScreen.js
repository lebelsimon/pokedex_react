import React  from 'react';
import LoginForm from '../components/loginForm/index';

import alltheActions from '../actions'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

const loginScreen = props => {
  console.log(props);
  const handleSubmit = (e, form, history) => {
    e.preventDefault();
    props.actions.userActions.loginFirebase({
      email: form.email,
      password: form.password
    });
  };

  return (
    <div>
      <h1>SignIn</h1>
      <LoginForm login={handleSubmit}/>
      <Link to={'/register'}>Don't have an account?</Link>
    </div>
  )
};

loginScreen.propTypes = {};

const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});


export default connect(mapStateToProps, mapDispatchToProps)(loginScreen);
