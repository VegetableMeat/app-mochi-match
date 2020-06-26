import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import MainBody from './MainBody';
import SideMenu from './SideMenu';
import MenuHeader from './MenuHeader';
import MenuInnerWrapper from './MenuInnerWrapper';
import UserIconSelectArea from './UserIconSelectArea';
import FavoriteGameList from './FavoriteGameList';
import FavoriteGameAddArea from './FavoriteGameAddArea';
import UserIcon from './UserIcon';
import GameNamePlate from './GameNamePlate';
import HeadLine1 from './HeadLine1';
import HeadLine2 from './HeadLine2';
import HeadLine3 from './HeadLine3';
import UnderLineInput from './UnderLineInput';
import BodyHeader from './BodyHeader';
import UnderLineList from './UnderLineList';
import CenterMainBody from './CenterMainBody';
import ShadowTextArea from './ShadowTextArea';
import BreakUnderLine from './BreakUnderLine';
import AddButton from './AddButton';

import './css/ProfileSetting.css';

export default function ProfileSetting() {
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
                    <i class="far fa-id-card"></i>Profile
                  </li>
                </Link>
                <Link to="/configuration">
                  <li>
                    <i class="fas fa-user-cog"></i>Setting
                  </li>
                </Link>
                <Link to="/history">
                  <li>
                    <i class="fas fa-history"></i>Play History
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
              <div className="wrapper">
                <HeadLine1>ユーザー名</HeadLine1>
                <div className="left-space-wrapper">
                  <ShadowTextArea />
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
                    <GameNamePlate title="タイトル" />
                    <GameNamePlate title="タイトル" />
                    <GameNamePlate title="タイトル" />
                    <GameNamePlate title="タイトル" />
                  </div>
                  <div className="favorite-game-add-area">
                    <ShadowTextArea />
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
}
