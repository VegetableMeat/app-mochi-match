import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import MainBody from "./MainBody";
import SideMenu from "./SideMenu";
import MenuHeader from "./MenuHeader";
import MenuInnerWrapper from "./MenuInnerWrapper";
import RadiusBodyHeader from "./RadiusBodyHeader";
import RadiusWhiteCard from "./RadiusWhiteCard";
import UserPlate from "./UserPlate";
import HeadeLine1 from "./HeadLine1";
import InnerText from "./InnerText";
import BreakUnderLine from "./BreakUnderLine";
import "./css/History.css";
import { useRadioGroup } from "@material-ui/core";
import Modal from "../containers/ModalContainer";

const History = ({ state, actions }) => {
  useEffect(() => {
    actions.getHistoryRequest();
  }, [actions]);

  /*const onPlateClick = (data) => {
    actions.showModalTrue("", "", data);
  };*/
  return (
    <div id="history">
      <Header />
      <Body>
        <SideMenu>
          <div className="menu-wrapper menu-wrapper-1 account-side-menu">
            <MenuHeader text="メニュー" />
            <MenuInnerWrapper>
              <ul>
                <Link to="/">
                  <li>
                    <i className="far fa-id-card"></i>Profile
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <i className="fas fa-user-cog"></i>Setting
                  </li>
                </Link>
                <Link to="/History">
                  <li>
                    <i className="fas fa-history"></i>Play History
                  </li>
                </Link>
              </ul>
            </MenuInnerWrapper>
          </div>
        </SideMenu>
        <MainBody>
          <RadiusBodyHeader title="プレイ履歴" />
          {state.historyState.history.map((data) => (
            <div className="history-cards">
              <RadiusWhiteCard>
                <div className="line">
                  <HeadeLine1>プレイ日時</HeadeLine1>
                  <InnerText>
                    {data.played_date.substr(0, 4) +
                      "/" +
                      data.played_date.substr(5, 2) +
                      "/" +
                      data.played_date.substr(8, 2) +
                      " " +
                      data.played_date.substr(11, 8)}
                  </InnerText>
                </div>
                <BreakUnderLine />
                <div className="line">
                  <HeadeLine1>ホスト</HeadeLine1>
                  <InnerText>{data.host_name}</InnerText>
                </div>
                <BreakUnderLine />
                <div className="line">
                  <HeadeLine1>ゲーム</HeadeLine1>
                  <InnerText>{data.game_title}</InnerText>
                </div>
                <BreakUnderLine />
                <div className="multi-line">
                  <HeadeLine1>メンバー</HeadeLine1>
                  <div className="members-area">
                    {data.join_users.map((user) => (
                      <UserPlate
                        icon=""
                        name={user.user_name}
                        id={user.user_id}
                        onPlateClick={actions.getUserRequest}
                      />
                    ))}
                  </div>
                </div>
              </RadiusWhiteCard>
            </div>
          ))}
        </MainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  );
};

export default History;
