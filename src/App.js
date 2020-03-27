import React, { useEffect, useState } from 'react';
import Routes from './config/routes';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';

import { store, persistor } from './config/store';
import { PersistGate } from 'redux-persist/integration/react';

import Loading from './components/loading/loading';
import './App.css';
import './config/translations';

function App() {
  const [currentTheme, setCurrentTheme] = useState(
    store.getState().theme.currentTheme
  );
  useEffect(() => {
    console.log(currentTheme);
    store.subscribe(() => {
      console.log(
        'App -> store.getState().theme.currentTheme',
        store.getState()
      );
      setCurrentTheme(store.getState().theme.currentTheme);
    });
  });

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <ThemeProvider theme={currentTheme}>
            <Routes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
      <script src='https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js' />
    </div>
  );
}

export default App;
