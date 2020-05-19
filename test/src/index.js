import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Top from './components/Top';
import GameCreate from './components/GameCreate';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={Top} />
      <Route exact path='/gameCreate' component={GameCreate} />
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
