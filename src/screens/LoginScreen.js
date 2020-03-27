import React, {useState} from 'react';
import LoginForm from '../components/loginForm/LoginForm';

import alltheActions from '../actions'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

const LoginScreen = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    isErrorMessage: ''
  });

  const handleSubmit = (e, form, history) => {
    e.preventDefault();
    props.actions.userActions.loginFirebase({
      email: form.email,
      password: form.password
    }).then(() => {
      history.push('/profile');
    }).catch(e => {
      console.log(e);
      setForm({...form, isError: true, isErrorMessage: e.response.data.error.message});
    });
  };

  return (
    <div>
      <h1>SignIn</h1>
      <LoginForm login={handleSubmit} form={form} setForm={setForm}/>
      <Link to={'/register'}>Don't have an account?</Link>
    </div>
  )
};

LoginScreen.propTypes = {};

const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
