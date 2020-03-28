import React, { useEffect, useState } from 'react';
import Routes from './config/routes';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/layout/NavBar';
import SideDrawer from './components/layout/sideDrawer/SideDrawer';
import BackDrop from './components/layout/backdrop/BackDrop';

import { Provider } from 'react-redux';

import { store, persistor } from './config/store';
import { PersistGate } from 'redux-persist/integration/react';

import Loading from './components/loading/loading';
import './config/translations';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const [currentTheme, setCurrentTheme] = useState(
    store.getState().theme.currentTheme
  );
  useEffect(() => {
    store.subscribe(() => {
      setCurrentTheme(store.getState().theme.currentTheme);
    });
  });
  console.log(sideDrawerOpen);
  return (
    <div style={{ height: '100%' }}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <ThemeProvider theme={currentTheme}>
            <Navbar onClick={() => setSideDrawerOpen(!sideDrawerOpen)} />
            {sideDrawerOpen ? (
              <React.Fragment>
                <SideDrawer />
                <BackDrop />
              </React.Fragment>
            ) : null}
            <Routes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
      <script src='https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js' />
    </div>
  );
}

export default App;
