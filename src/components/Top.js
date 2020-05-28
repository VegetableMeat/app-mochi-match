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
import RoomContents from '../containers/RoomContentsContainer';
import FavoriteGames from './FavoriteGames';
import './css/Top.css';

export default function Top() {
  return (
    <div id="top">
      <Header />
      <Body>
        <SideMenu>
          <div className="menu-wrapper menu-wrapper-1">
            <MenuHeader text="検索" />
            <MenuInnerWrapper>
              検索フォーム
            </MenuInnerWrapper>
          </div>
          <div className="menu-wrapper menu-wrapper-2">
            <MenuHeader text="お気に入りゲーム" />
            <MenuInnerWrapper>
              <FavoriteGames />
            </MenuInnerWrapper>
          </div>
            <div className="menu-wrapper menu-wrapper-3">
            <MenuHeader text="人気ゲーム" />
            <MenuInnerWrapper>
              人気ゲーム
            </MenuInnerWrapper>
          </div>
        </SideMenu>
        <MainBody>
          <RoomContents />
        </MainBody>
      </ Body>
      <CreateRoomButton />
      <PageNation />
      <Footer />
    </div>
  )
}
