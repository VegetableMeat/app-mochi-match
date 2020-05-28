import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import MainBody from './MainBody';
import SideMenu from './SideMenu';
import CreateRoomButton from './CreateRoomButton';
import PageNation from './PageNation';
import MenuHeader from './MenuHeader';
import MenuInnerWrapper from './MenuInnerWrapper';
import RoomContents from './RoomContents';
import './css/Top.css';
import RoomCard from './RoomCard';
import ShadowInputArea from './ShadowInputArea';
import SerchButton from './SerchButton';

export default function Top() {
  return (
    <div id="top">
      <Header />
      <Body>
        <SideMenu>
          <div className="menu-wrapper menu-wrapper-1">
            <MenuHeader text="検索" />
            <MenuInnerWrapper>
              <ShadowInputArea />
              <SerchButton />
            </MenuInnerWrapper>
          </div>
          <div className="menu-wrapper menu-wrapper-2">
            <MenuHeader text="お気に入りゲーム" />
            <MenuInnerWrapper>
              ゲーム一覧
            </MenuInnerWrapper>
          </div>
            <div className="menu-wrapper menu-wrapper-3">
            <MenuHeader text="人気ゲーム" />
            <MenuInnerWrapper>
              ゲーム一覧
            </MenuInnerWrapper>
          </div>
        </SideMenu>
        <MainBody>
          <RoomContents>
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </RoomContents>
        </MainBody>
      </ Body>
      <CreateRoomButton />
      <PageNation />
      <Footer />
    </div>
  )
}
