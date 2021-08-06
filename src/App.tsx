import React from "react";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { GlobalStyle } from "./styles/global";

import { store, persistor } from './store/index';
import history from './services/history';

import { Routes } from './Routes/index';

export function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}
