import React from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'redux';

import i18next from 'i18next'

import { withTranslation } from 'react-i18next'
import allTheActions from '../actions'

import styled from 'styled-components'

import testBackground from '../images/testecran.jpg'

import { themeLight, themeDark } from '../config/themes'

const Settings = props => {

  // const testBackground = props.themeState.currentTheme.backgroundimage;
  console.log(props)
  const changeLanguage = langue => {
    console.log(langue);
    i18next.changeLanguage(langue);
    props.actions.language.saveLanguage(langue);

  }

  return (
    <Container>
      <button onClick={() => props.actions.theme.changeTheme(themeLight)}>
        Theme Light
      </button>
      <button onClick={() => props.actions.theme.changeTheme(themeDark)}>
        Theme Dark
      </button>

      <p>{props.t('menu')}</p>
      <button onClick={() => changeLanguage('fr')}>fr</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </Container>
  )
}
const Container = styled.div`
  background-color: ${props => props.theme.primary};
  height: ${props => props.theme.height};
  height: 100vh;
  background-image: url(${props => props.theme.backgroundimage});
  background-position: ${props => props.theme.backgroundposition};
  background-repeat: ${props => props.theme.backgroundrepeat};
  background-size: ${props => props.theme.backgroundsize};
`

const mapStateToProps = state => ({
    themeState: state.theme
  })

const mapDispatchToProps = () => dispatch => ({
  actions: {
    theme: bindActionCreators(allTheActions.theme, dispatch),
    language: bindActionCreators(allTheActions.language, dispatch)
  }
})

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(Settings)