import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Top from './../containers/TopContainer';
import Login from './../containers/LoginContainer';
import Logout from './Logout';
import Auth from './../containers/AuthContainer';
import History from './History';
import Register from './../containers/RegisterContainer';
import SignUp from './SignUp';
import ProfileSetting from './ProfileSettings';
import Configuration from './Configuration';
import RoomCreation from './RoomCreation';
import InTheRoom from './../containers/InTheRoomContainer';
import Admin from './../containers/AdminContainer';
import LoginDone from './../containers/LoginDoneContainer';

class App extends React.Component {

  componentDidMount() {
    const { actions, history } = this.props;
    actions.init(history)
  }

  render() {
    return (
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
    )
  }
}

export default App