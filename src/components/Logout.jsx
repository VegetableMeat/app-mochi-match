import React from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../containers/HeaderContainer";
import Footer from "./Footer";
import Body from "./Body";
import CenterMainBody from "./CenterMainBody";
import Modal from "../containers/ModalContainer";
import BodyHeader from "./BodyHeader";
import { message } from "antd";
import "./css/Antd.css";
import "./css/Sign.css";

const Logout = ({ state, actions, history }) => {
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expires_in");
    actions.logout();
    message.success("ログアウトしました");
  };

  if (
    !localStorage.getItem("access_token") &&
    !localStorage.getItem("refresh_token") &&
    !localStorage.getItem("expires_in")
  ) {
    return <Redirect to={`/`} />;
  }

  return (
    <div id="login">
      <Header history={history} />
      <Body>
        <CenterMainBody>
          <BodyHeader>ログアウト</BodyHeader>
          <div className="button-area">
            <button onClick={() => logout()} className="google">
              ログアウト
            </button>
          </div>
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  );
};

export default Logout;
