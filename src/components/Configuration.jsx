import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import MainBody from "./MainBody";
import SideMenu from "./SideMenu";
import MenuHeader from "./MenuHeader";
import MenuInnerWrapper from "./MenuInnerWrapper";
import UnderLineList from "./UnderLineList";
import BodyHeader from "./BodyHeader";
import HeadLine1 from "./HeadLine1";
import DangerButton from "./DangerButton";
import CenterMainBody from "./CenterMainBody";
import "./css/Configuration.css";

const Configuration = () => {
  return (
    <div id="configuration">
      <Header />
      <Body>
        <SideMenu>
          <div className="menu-wrapper menu-wrapper-1 account-side-menu">
            <MenuHeader text="メニュー" />
            <MenuInnerWrapper>
              <ul>
                <Link to="/profileSetting">
                  <li>
                    <i className="far fa-id-card"></i>Profile
                  </li>
                </Link>
                <Link to="/configuration">
                  <li>
                    <i className="fas fa-user-cog"></i>Setting
                  </li>
                </Link>
                <Link to="/history">
                  <li>
                    <i className="fas fa-history"></i>Play History
                  </li>
                </Link>
              </ul>
            </MenuInnerWrapper>
          </div>
        </SideMenu>
        <MainBody>
          <div className="side-main-body">
            <CenterMainBody>
              <BodyHeader>設定</BodyHeader>
              <div className="line">
                <HeadLine1>アカウント削除</HeadLine1>
                <button className="danger-button color-red">
                  アカウント削除
                </button>
              </div>
            </CenterMainBody>
          </div>
        </MainBody>
      </Body>
      <Footer />
    </div>
  );
};

export default Configuration;
