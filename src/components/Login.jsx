import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import CenterMainBody from "./CenterMainBody";
import Modal from "../containers/ModalContainer";
import BodyHeader from "./BodyHeader";
import "./css/Sign.css";

const Login = ({ state, actions }) => {
  useEffect(() => {
    actions.authReq();
  }, []);

  if (state.loadingFlag) {
    return null;
  } else {
    if (state.loggedIn) {
      return <Redirect to={"/"} />;
    }
  }

  return (
    <div id="login">
      <Header />
      <Body>
        <CenterMainBody>
          <BodyHeader>ログイン</BodyHeader>
          <div className="button-area">
            <button className="facebook">Facebookアカウントでログイン</button>
            <button className="twitter">Twitterアカウントでログイン</button>
            {/* <button onClick={() => this.locationGoogle()} className="google">Googleアカウントでログイン</button> */}
            <button onClick={() => actions.loginReq()} className="google">
              Googleアカウントでログイン
            </button>
          </div>
          <div className="link-area">
            <Link to="/Register">新規登録</Link>はこちら
          </div>
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  );
};

export default Login;
