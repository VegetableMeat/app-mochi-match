import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import Top from "./../containers/TopContainer";
import Login from "./../containers/LoginContainer";
import Logout from "./../containers/LogoutContainer";
import Auth from "./../containers/AuthContainer";
import History from "./../containers/HistoryContainer";
import Register from "./../containers/RegisterContainer";
import SignUp from "./SignUp";
import ProfileSetting from "./../containers/ProfileSettingsContainer";
import Configuration from "./../containers/ConfigurationContainer";
import RoomCreation from "./../containers/RoomCreationContainer";
import InTheRoom from "./../containers/InTheRoomContainer";
import Admin from "./../containers/AdminContainer";
import LoginDone from "./../containers/LoginDoneContainer";
import Loading from "./Loading";
import NotFound from "./NotFound";

const App = ({ actions, history }, props) => {
  useEffect(() => {
    actions.init(history);
  }, [actions, history]);

  const loading = false;
  if (loading) {
    return <Loading />;
  }
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/logout" component={Logout} /> */}
      <Route exact path="/register" component={Register} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/login-done" component={LoginDone} />
      <Route exact path="/404" component={NotFound} />
      <Auth>
        <Switch>
          <Route exact path="/history" component={History} />
          <Route exact path="/profileSetting" component={ProfileSetting} />
          <Route exact path="/configuration" component={Configuration} />
          <Route exact path="/roomcreation" component={RoomCreation} />
          <Route exact path="/intheroom" component={InTheRoom} />
          <Redirect to="/404" />
        </Switch>
      </Auth>
    </Switch>
  );
};

export default App;
