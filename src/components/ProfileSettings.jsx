import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Header from "../containers/HeaderContainer";
import Footer from "./Footer";
import Body from "./Body";
import MainBody from "./MainBody";
import SideMenu from "./SideMenu";
import MenuHeader from "./MenuHeader";
import MenuInnerWrapper from "./MenuInnerWrapper";
import UserIconSelectArea from "./UserIconSelectArea";
import FavoriteGameList from "./FavoriteGameList";
import FavoriteGameAddArea from "./FavoriteGameAddArea";
import UserIcon from "./UserIcon";
import GameNamePlate from "./GameNamePlate";
import HeadLine1 from "./HeadLine1";
import HeadLine2 from "./HeadLine2";
import HeadLine3 from "./HeadLine3";
import UnderLineInput from "./UnderLineInput";
import BodyHeader from "./BodyHeader";
import UnderLineList from "./UnderLineList";
import CenterMainBody from "./CenterMainBody";
import ShadowTextArea from "./ShadowTextArea";
import BreakUnderLine from "./BreakUnderLine";
import AddButton from "./AddButton";
import Error from "./Error";
import TextAreaStyles from "./custom/TextArea";
import Modal from "../containers/ModalContainer";
import "./css/ProfileSetting.css";
import "./css/Error.css";
import "./css/Antd.css";
import { useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { message } from "antd";
// import inputAreaStyles from "./custom/InputArea";

const ProfileSetting = ({ state, actions, history }) => {
  const { get, profile, error, value, select, success } = state.profileState;
  const { favorite_games, icon, user_name } = state.userState.user;
  const { roomListState } = state;

  const successMessage = (mes) => {
    message.success(mes);
    actions.deleteSuccessMessage();
  };

  useEffect(() => {
    actions.getGameTitleReq();
    actions.setUserName(user_name);
    actions.setIcon(icon);
  }, [state.userState.user]);

  useEffect(() => {
    actions.setFavoriteGame(favorite_games);
  }, [get.title]);

  let option = [];

  if (select.title) {
    option = select.title.map((data) => ({
      value: data.game_title,
      label: data.game_title,
    }));
  }

  const user_icon = [
    { key: "icon", value: "icon" },
    { key: "icon2", value: "icon2" },
    { key: "icon3", value: "icon3" },
    { key: "icon4", value: "icon4" },
    { key: "icon5", value: "icon5" },
    { key: "icon6", value: "icon6" },
    { key: "icon7", value: "icon7" },
    { key: "icon8", value: "icon8" },
    { key: "icon9", value: "icon9" },
  ];
  console.log(profile);
  return (
    <div id="profile-setting">
      {success ? successMessage("保存しました") : null}
      <Header roomListState={roomListState} history={history} />
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
              <BodyHeader>プロフィール設定</BodyHeader>
              <div
                className={[
                  "wrapper",
                  error.flag.name ? "error-background" : "",
                ].join(" ")}
              >
                <HeadLine1>ユーザー名</HeadLine1>
                <div className="left-space-wrapper">
                  <ShadowTextArea
                    actions={actions.inputUserName}
                    isValidate={true}
                    name="user_name"
                    defaultValue={profile.name ? profile.name : ""}
                  />
                  {error.flag.name ? <Error text={error.msg.name} /> : null}
                </div>
              </div>
              <BreakUnderLine />
              <div className="wrapper">
                <HeadLine1>ユーザーアイコン</HeadLine1>
                <div className="left-space-wrapper">
                  <UserIconSelectArea>
                    {profile.icon &&
                      user_icon.map((i) =>
                        i.value === profile.icon ? (
                          <UserIcon isSelect={true} value={i.value} />
                        ) : (
                          <UserIcon
                            name="user_icon"
                            value={i.value}
                            actions={actions.inputUserIcon}
                            isValidate={true}
                            list={user_icon}
                          />
                        )
                      )}
                  </UserIconSelectArea>
                </div>
              </div>
              <BreakUnderLine />
              <div className="wrapper">
                <HeadLine1>お気に入りゲーム</HeadLine1>
                <div className="left-space-wrapper">
                  <div className="favorite-games-area">
                    {profile.favorite &&
                      profile.favorite.map((data, index) => (
                        <div className="plate">
                          <GameNamePlate
                            key={index}
                            title={data.game_title}
                            value={data.game_id}
                          />
                          <div
                            className="cancel"
                            onClick={() => {
                              actions.deleteFavoriteGame(data.game_title);
                            }}
                          >
                            <CloseOutlined
                              style={{
                                fontSize: "10px",
                                color: "#f00",
                                position: "absolute",
                                top: "16px",
                                left: "12px",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="favorite-game-add-area">
                    <Select
                      menuPortalTarget={document.body}
                      placeholder="文字入力で検索"
                      options={option}
                      styles={TextAreaStyles()}
                      onChange={(e) => actions.addFavoriteGame(e.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="footer-button-area">
                <button
                  className="color-blue"
                  onClick={() => {
                    actions.updateUserProfileReq({
                      profile: profile,
                      error: error,
                    });
                  }}
                >
                  変更内容保存
                </button>
                <button
                  className="color-red"
                  onClick={() =>
                    actions.showModalTrue("CANCEL", "update_profile", null)
                  }
                >
                  変更キャンセル
                </button>
              </div>
            </CenterMainBody>
          </div>
        </MainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  );
};

export default ProfileSetting;
