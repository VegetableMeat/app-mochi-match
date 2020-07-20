import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Header from "./Header";
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
import "./css/ProfileSetting.css";
import "./css/Error.css";
import { useEffect } from "react";
// import inputAreaStyles from "./custom/InputArea";

const ProfileSetting = ({ state, actions }) => {
  const { get, profile, error, value } = state.profileState;
  const { favorite_games } = state.userState.user;

  useEffect(() => {
    actions.getGameTitleReq();
    actions.setFavoriteGame(favorite_games);
  }, [actions]);
  console.log(profile);
  console.log(favorite_games);
  return (
    <div id="profile-setting">
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
              <BodyHeader>プロフィール設定</BodyHeader>
              <div className="wrapper error-background">
                <HeadLine1>ユーザー名</HeadLine1>
                <div className="left-space-wrapper">
                  <ShadowTextArea actions={actions.inputUserName} />
                  <Error text="入力してください" />
                </div>
              </div>
              <BreakUnderLine />
              <div className="wrapper">
                <HeadLine1>ユーザーアイコン</HeadLine1>
                <div className="left-space-wrapper">
                  <UserIconSelectArea>
                    <UserIcon />
                    <UserIcon selectFlg="true" />
                    <UserIcon />
                    <UserIcon />
                    <UserIcon />
                    <UserIcon />
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
                        <GameNamePlate
                          key={index}
                          title={data.game_title}
                          value={data.game_id}
                        />
                      ))}
                  </div>
                  <div className="favorite-game-add-area">
                    <Select
                      menuPortalTarget={document.body}
                      placeholder="文字入力で検索できます"
                      options={
                        !error.get.title &&
                        get.title.length &&
                        get.title.map((data) => ({
                          value: data.game_title,
                          label: data.game_title,
                        }))
                      }
                      styles={TextAreaStyles()}
                      // onChange={(e) =>
                      //   actions.inputSelectGameTitle({
                      //     text: e.label,
                      //     data: e.label,
                      //     error: false,
                      //   })
                      // }
                    />
                    <AddButton />
                  </div>
                </div>
              </div>
              <div className="footer-button-area">
                <button className="color-blue">変更内容保存</button>
                <button className="color-red">変更キャンセル</button>
              </div>
            </CenterMainBody>
          </div>
        </MainBody>
      </Body>
      <Footer />
    </div>
  );
};

export default ProfileSetting;
