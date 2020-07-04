import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Store';
import Top from './containers/TopContainer';
import Login from './containers/LoginContainer';
import Logout from './components/Logout';
import Auth from './containers/AuthContainer';
import History from './components/History';
import Register from './containers/RegisterContainer';
import SignUp from './components/SignUp';
import ProfileSetting from './components/ProfileSettings';
import Configuration from './components/Configuration';
import RoomCreation from './components/RoomCreation';
import InTheRoom from './containers/InTheRoomContainer';
import Admin from './containers/AdminContainer';
import LoginDone from './containers/LoginDoneContainer';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login-done" component={LoginDone} />
        <Auth>
          <Switch>
            <Route exact path="/history" component={History} />
            <Route exact path="/profileSetting" component={ProfileSetting} />
            <Route exact path="/configuration" component={Configuration} />
            <Route exact path="/roomcreation" component={RoomCreation} />
            <Route exact path="/intheroom" component={InTheRoom} />
          </Switch>
        </Auth>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
