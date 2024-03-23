import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
