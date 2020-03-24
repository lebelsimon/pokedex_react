import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import allTheActions from '../actions'

// import i18next from 'i18next'
import styled from 'styled-components'

import { themeLight, themeDark } from '../config/themes'

const Settings = props => {
  console.log('props', props.themeState)
  return (
    <Container>
      <button onClick={() => props.actions.theme.changeTheme(themeLight)}>
        Theme Light
      </button>
      <button onClick={() => props.actions.theme.changeTheme(themeDark)}>
        Theme Dark
      </button>
    </Container>
  )
}
const Container = styled.div`
  background-color: ${props => props.theme.primary};
`

const mapStateToProps = state => ({
    themeState: state.theme
  })

const mapDispatchToProps = () => dispatch => ({
  actions: {
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
