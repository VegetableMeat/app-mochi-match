import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "../containers/HeaderContainer";
import Footer from "./Footer";
import Body from "./Body";
import CenterMainBody from "./CenterMainBody";
import Modal from "../containers/ModalContainer";
import BodyHeader from "./BodyHeader";
import "./css/Sign.css";

const Login = ({ state, actions, history }) => {
  const { roomListState, loginState } = state;

  useEffect(() => {
    actions.authReq();
  }, []);

  if (loginState.loadingFlag) {
    return null;
  } else {
    if (loginState.loggedIn) {
      return <Redirect to={`/?page=${roomListState.selectPage}`} />;
    }
  }
  console.log(loginState);
  return (
    <div id="login">
      <Header roomListState={roomListState} history={history} />
      <Body>
        <CenterMainBody>
          <BodyHeader>ログイン</BodyHeader>
          <div className="button-area">
            <button className="facebook">Facebookアカウントでログイン</button>
            <button className="twitter">Twitterアカウントでログイン</button>
            <button onClick={() => actions.loginReq()} className="google">
              Googleアカウントでログイン
            </button>
          </div>
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  );
};

export default Login;
