import React from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import LoginForm from '../components/loginForm'
import Logo from '../components/loginForm/image'
import styled from 'styled-components'

const submit = (e, form, history) => {
  e.preventDefault()
  const { username, password } = form
  login(username, password, history)
}

const login = (username, password, history) => {
  axios
    .post('https://easy-login-api.herokuapp.com/users/login', {
      username: username,
      password: password
    })
    .then(function(response) {
      const json = response.headers['x-access-token']
      const obj = JSON.stringify(json)
      console.log(obj)
      localStorage.setItem('x-access-token', obj)
      console.log('item')
      history.push('/todos')
    })
    .catch(function(error) {
      console.log(error)
    })
}
const Login = props => {
  console.log('TCL: props', props)
  return (
    <div>
      <Header>
        <Logo></Logo>
      </Header>

      <Description>
        <H1WelcomeBack>Bon retour parmi nous</H1WelcomeBack>
        <ParagrapheHeader>
          Ne manquez pas votre prochaine opportunité ! Identifiez-vous pour
          rester au courant de ce qui se passe dans votre sphère
          professionnelle.
        </ParagrapheHeader>
      </Description>

      <LoginForm submit={submit}></LoginForm>
    </div>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const H1WelcomeBack = styled.h1`
  padding: 12px;
`

const ParagrapheHeader = styled.p`
  text-align: center;
  padding: 12px;
`

export default Login
