import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'
// import axios from 'axios'

import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const RegisterForm = ({ register, form, setForm }) => {
  const history = useHistory();

  return (
    <AllContainer>
      <FormContainer>
        <FormStyled onSubmit={e => register(e, form, history)}>
          <InputContainer>
            <StyledInput
              placeholder='Username'
              name='username'
              onChange={e => setForm({ ...form, username: e.target.value })}
              type='text'
              required={true}
            />
          </InputContainer>
          <InputContainer>
            <StyledInput
              placeholder='Entrer Email'
              name='email'
              onChange={e => setForm({ ...form, email: e.target.value })}
              type='email'
              required={true}
              onBlur={() =>
                form.email.length < 8
                  ? setForm({
                      ...form,
                      isError: true,
                      isErrorMessage: 'Mail invalide'
                    })
                  : setForm({ ...form, isError: false })
              }
            />
          </InputContainer>

          <InputContainer>
            <StyledInput
              name='password'
              placeholder='Entrer Password'
              onChange={e => setForm({ ...form, password: e.target.value })}
              type='password'
              required={true}
              onBlur={() =>
                form.password.length < 8
                  ? setForm({
                      ...form,
                      isError: true,
                      isErrorMessage: 'Password Invalide'
                    })
                  : setForm({ ...form, isError: false })
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
              onChange={e => setForm({ ...form, passwordC: e.target.value })}
              type='password'
              onBlur={() =>
                form.passwordC !== form.password
                  ? setForm({
                      ...form,
                      isError: true,
                      isErrorMessage: 'Password différents'
                    })
                  : setForm({ ...form, isError: false })
              }
            />

            {form.isError ? (
              <MessageError>
                <p>{form.isErrorMessage}</p>
              </MessageError>
            ) : null}
          </InputContainer>

          <InputContainer>
            <SubmitInput type='submit' value="S'enregistrer" />
          </InputContainer>
        </FormStyled>
      </FormContainer>
    </AllContainer>
  );
};

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MessageError = styled.div`
  color: red;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  outline: none;
  margin: 1px 0;
  border: 1px solid rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
  height: 90px;
  
  padding: 0 30px;
    }
  
    @media (max-width: 425px) {
  height: 45px;
  
  padding: 0 10px;
    }
`;

const SubmitInput = styled.input`
  background-color: #0073b1;
  padding: 0 10px;
  outline: none;
  border: none;
  margin: 1px 0;

  
@media (max-width: 768px) {
  height: 90px;
  padding: 0 30px;
    }
  
    @media (max-width: 425px) {
  height: 45px;
  
  padding: 0 10px;
    }
`;

const FormContainer = styled.div``;

const InputContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const FormStyled = styled.form``;

RegisterForm.propTypes = {};

export default RegisterForm;
