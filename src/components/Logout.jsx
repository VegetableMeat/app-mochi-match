import React from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../containers/HeaderContainer";
import Footer from "./Footer";
import Body from "./Body";
import CenterMainBody from "./CenterMainBody";
import Modal from "../containers/ModalContainer";
import BodyHeader from "./BodyHeader";
import "./css/Sign.css";

const Logout = ({ history }) => {
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expires_in");
    history.push(`/`);
  };

  return (
    <div id="login">
      <Header />
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
