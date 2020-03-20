import React  from 'react';
import RegisterForm from '../components/registerForm/index';

import alltheActions from '../actions'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const registerScreen = props => {
  const handleSubmit = (e, form, history) => {
    e.preventDefault();
    props.actions.userActions.registerFirebase({
      email: form.email,
      password: form.password
    });
  };

  return (
    <div>
      <h1>SignUp</h1>
      <RegisterForm register={handleSubmit}/>
    </div>
  )
};

registerScreen.propTypes = {};

const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});

export default connect(mapStateToProps, mapDispatchToProps)(registerScreen);