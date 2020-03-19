import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import axios from 'axios'

import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

const RegisterForm = ({ register }) => {
  const history = useHistory();
  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    isErrorMessage: ''
  });
  useEffect(() => {
    console.log(form.username.length)
  });

  return (
    <AllContainer>
      <FormContainer>
        <FormStyled onSubmit={e => register(e, form, history)}>
          <InputContainer>
            <StyledInput
              placeholder='Entrer Email'
              name='username'
              onChange={e => setForm({...form, username: e.target.value})}
              type='text'
              onBlur={() =>
                form.username.length < 8
                  ? setForm({
                    ...form,
                    isError: true,
                    isErrorMessage: 'Mail invalide'
                  })
                  : setForm({...form, isError: false})
              }
            />
          </InputContainer>

          <InputContainer>
            <StyledInput
              name='password'
              placeholder='Entrer Password'
              onChange={e => setForm({...form, password: e.target.value})}
              type='password'
              onBlur={() =>
                form.password.length < 8
                  ? setForm({
                    ...form,
                    isError: true,
                    isErrorMessage: 'Password Invalide'
                  })
                  : setForm({...form, isError: false})
              }
            />

            {form.isError ? (
              <MessageError>
                <p>{form.isErrorMessage}</p>
              </MessageError>
            ) : null}
          </InputContainer>

          <InputContainer>
            <StyledInput
              name='password-c'
              placeholder='Entrer Password again'
              onChange={e => setForm({...form, passwordC: e.target.value})}
              type='password'
              onBlur={() =>
                form.passwordC !== form.password
                  ? setForm({
                    ...form,
                    isError: true,
                    isErrorMessage: 'Password différents'
                  })
                  : setForm({...form, isError: false})
              }
            />

            {form.isError ? (
              <MessageError>
                <p>{form.isErrorMessage}</p>
              </MessageError>
            ) : null}
          </InputContainer>

          <InputContainer>
            <SubmitInput type='submit' value="S'enregistrer"/>
          </InputContainer>
        </FormStyled>
      </FormContainer>
    </AllContainer>
  )
};

const AllContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MessageError = styled.div``;

const StyledInput = styled.input`
  box-sizing: border-box;
  height: 45px;
  padding: 0 10px;
  outline: none;
  margin: 1px 0;
  border: 1px solid rgba(0, 0, 0, 0.6);
`;

const SubmitInput = styled.input`
  background-color: #0073b1;
  height: 45px;
  padding: 0 10px;
  outline: none;
  border: none;
  margin: 1px 0;
`;

const FormContainer = styled.div``;

const InputContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const FormStyled = styled.form``;

RegisterForm.propTypes = {};

export default RegisterForm
