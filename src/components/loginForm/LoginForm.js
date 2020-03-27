import React from 'react';
// import PropTypes from 'prop-types'
// import axios from 'axios'

import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const LoginForm = ({ login, form, setForm }) => {
  const history = useHistory();

  return (
    <AllContainer>
      <FormContainer>
        <FormStyled onSubmit={e => login(e, form, history)}>
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
            <SubmitInput type='submit' value="S'identifier" />
          </InputContainer>
        </FormStyled>
      </FormContainer>
    </AllContainer>
  );
};

const AllContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
`;

const MessageError = styled.div`
  color: red;
`;

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

LoginForm.propTypes = {};

export default LoginForm;
