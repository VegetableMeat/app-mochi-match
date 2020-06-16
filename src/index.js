import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Store';
import Top from './components/Top';
import GameCreate from './components/GameCreate';
import Login from './containers/LoginContainer';
import Logout from './components/Logout';
import Auth from './containers/AuthContainer';
import History from './components/History';
import Register from './containers/RegisterContainer';
import SignUp from './components/SignUp';
import ProfileSetting from './components/ProfileSettings'
import Configuration from './components/Configuration';
import RoomCreation from './components/RoomCreation';

ReactDOM.render(
	<Provider store={store}>
    	<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Top} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/logout' component={Logout} />
				<Route exact path='/register' component={Register} />
      			<Route exact path='/sign-up' component={SignUp} />
				<Auth>
					<Switch>
						<Route exact path='/gameCreate' component={GameCreate} />
						<Route exact path='/history' component={History} />
						<Route exact path='/profilesetting' component={ProfileSetting} />
						<Route exact path='/configuration' component={Configuration} />
						<Route exact path='/roomcreation' component={RoomCreation} />
					</Switch>
				</Auth>
			</Switch>
    	</ BrowserRouter>
  	</Provider>,
  document.getElementById('root')
);
