import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './store/Reducers';

import Top from './components/Top';
import GameCreate from './components/GameCreate';

const store = createStore(
  reducer,
  applyMiddleware(createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={Top} />
      <Route exact path='/gameCreate' component={GameCreate} />
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
