import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Store';
import Top from './components/Top';
import GameCreate from './components/GameCreate';
import History from './components/History';
import Login from './components/Login';
import Register from './components/Register';
import SignUp from './components/SignUp';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={Top} />
      <Route exact path='/gameCreate' component={GameCreate} />
      <Route exact path='/history' component={History} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/sign-up' component={SignUp} />
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
