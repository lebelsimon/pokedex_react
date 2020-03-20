import React, {useState} from 'react';
import RegisterForm from '../components/registerForm/RegisterForm';

import alltheActions from '../actions'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const RegisterScreen = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    isErrorMessage: ''
  });

  const handleSubmit = (e, form, history) => {
    e.preventDefault();
    props.actions.userActions.registerFirebase({
      email: form.email,
      password: form.password
    }).then(() => {
      history.push('/profile');
    }).catch((e) => {
      setForm({...form, isError: true, isErrorMessage: e.response.data.error.message});
    });
  };

  return (
    <div>
      <h1>SignUp</h1>
      <RegisterForm register={handleSubmit} form={form} setForm={setForm}/>
    </div>
  )
};

RegisterScreen.propTypes = {};

const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);