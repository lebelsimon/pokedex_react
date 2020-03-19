import React from 'react'
import Routes from './config/routes'

import { Provider } from 'react-redux'
import { store, persistor } from './config/store'
import { ThemeProvider } from 'styled-components'

import {themeLight} from './config/themes'
import { PersistGate } from 'redux-persist/integration/react'


import './App.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={themeLight}>
      <Routes></Routes>
      </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
