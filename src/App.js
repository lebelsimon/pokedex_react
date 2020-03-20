import React from 'react';
import Routes from './config/routes';

import { Provider } from 'react-redux';
import { store, persistor } from './config/store';
import { ThemeProvider } from 'styled-components';

import {themeLight} from './config/themes';
import { PersistGate } from 'redux-persist/integration/react';


import './App.css';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={themeLight}>
            <Routes/>
          </ThemeProvider>
        </PersistGate>
      </Provider>
      <script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js"/>

      <script>
      </script>
    </div>
  )
};

export default App;