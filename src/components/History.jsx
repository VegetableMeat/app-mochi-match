import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import MainBody from './MainBody';
import SideMenu from './SideMenu';
import MenuHeader from './MenuHeader';
import MenuInnerWrapper from './MenuInnerWrapper';
import UnderLineList from './UnderLineList';
import RadiusBodyHeader from './RadiusBodyHeader';
import RadiusWhiteCard from './RadiusWhiteCard';
import UserPlate from './UserPlate';
import HeadeLine1 from './HeadLine1';
import InnerText from './InnerText';
import BreakUnderLine from './BreakUnderLine';

import './css/History.css';

export default function History() {
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
                    <i class="far fa-id-card"></i>Profile
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <i class="fas fa-user-cog"></i>Setting
                  </li>
                </Link>
                <Link to="/History">
                  <li>
                    <i class="fas fa-history"></i>Play History
                  </li>
                </Link>
              </ul>
            </MenuInnerWrapper>
          </div>
        </SideMenu>
        <MainBody>
          <RadiusBodyHeader title="プレイ履歴" />
          <div className="history-cards">
            <RadiusWhiteCard>
              <div className="line">
                <HeadeLine1>プレイ日時</HeadeLine1>
                <InnerText>4月6日　10時22分</InnerText>
              </div>
              <BreakUnderLine />
              <div className="line">
                <HeadeLine1>ホスト</HeadeLine1>
                <InnerText>もちもちくん</InnerText>
              </div>
              <BreakUnderLine />
              <div className="line">
                <HeadeLine1>ゲーム</HeadeLine1>
                <InnerText>あつまれどうぶつの盛り</InnerText>
              </div>
              <BreakUnderLine />
              <div className="multi-line">
                <HeadeLine1>メンバー</HeadeLine1>
                <div className="members-area">
                  <div className="user-plate">TestPlate</div>
                  <div className="user-plate">TestPlate</div>
                  <div className="user-plate">TestPlate</div>
                  <div className="user-plate">TestPlate</div>
                  <div className="user-plate">TestPlate</div>
                  <div className="user-plate">TestPlate</div>
                </div>
              </div>
            </RadiusWhiteCard>
          </div>
        </MainBody>
      </Body>
      <Footer />
    </div>
  );
}
