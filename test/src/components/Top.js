import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../containers/Header';
import Footer from './Footer';
import Body from './Body';
import MainBody from './MainBody';
import SideMenu from './SideMenu';
import CreateRoomButton from './CreateRoomButton';
import PageNation from './PageNation';
import MenuHeader from './MenuHeader';
import MenuInnerWrapper from './MenuInnerWrapper';

import './css/Top.css';

export default function Top() {
  return (
    <div className="top">
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
          
        </MainBody>
      </ Body>
      <CreateRoomButton />
      <PageNation />
      <Footer />
    </div>
  )
}
