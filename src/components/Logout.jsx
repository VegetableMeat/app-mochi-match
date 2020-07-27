import React from "react";
import { Link } from "react-router-dom";
import Header from "../containers/HeaderContainer";
import Body from "./Body";
import Footer from "./Footer";

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expires_in");
  };

  return (
    <div id="logout">
      <Header />
      <Body>
        <h1>Logout画面です</h1>
        <Link to={"/"} onClick={() => logout()}>
          ログアウトする
        </Link>
      </Body>
      <Footer />
    </div>
  );
};

export default Logout;
