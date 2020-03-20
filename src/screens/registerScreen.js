import React  from 'react';
import RegisterForm from '../components/registerForm/index';

import alltheActions from '../actions'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const registerScreen = props => {
  const handleSubmit = (e, form, history) => {
    e.preventDefault();
    props.actions.register.addUser({
      username: form.username,
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
    register: bindActionCreators(alltheActions.register, dispatch)
  }
});

const mapStateToProps = state => ({
  registerState: state.register
});


export default connect(mapStateToProps, mapDispatchToProps)(registerScreen);
