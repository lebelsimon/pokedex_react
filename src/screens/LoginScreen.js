import React, { useState } from 'react';
import LoginForm from '../components/loginForm/LoginForm';
import styled from 'styled-components';
import alltheActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginScreen = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    isErrorMessage: ''
  });

  const handleSubmit = (e, form, history) => {
    e.preventDefault();
    props.actions.userActions
      .loginFirebase({
        email: form.email,
        password: form.password
      })
      .then(() => {
        history.push('/profile');
      })
      .catch(e => {
        console.log(e);
        setForm({
          ...form,
          isError: true,
          isErrorMessage: e.response.data.error.message
        });
      });
  };

  return (
    <Container>
      <h1>SignIn</h1>
      <LoginForm login={handleSubmit} form={form} setForm={setForm}/>
      <Link to={'/register'}>Don't have an account?</Link>
    </Container>
  );
};

LoginScreen.propTypes = {};

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

const mapDispatchToProps = () => dispatch => ({
  actions: {
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions,
  themeState: state.theme
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
