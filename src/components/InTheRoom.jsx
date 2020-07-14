import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import MainBody from './MainBody';
import SideMenu from './SideMenu';
import MenuHeader from './MenuHeader';
import MenuInnerWrappr from './MenuInnerWrapper';
import UserPlate from './UserPlate';
import ChatArea from './ChatArea';
import ChatDisplay from './ChatDisplay';
import SimpleProfile from './SimpleProfile';
import ExitButton from './ExitButton';
import UserStatus from './UserStatus';
import GamePlate from './GamePlate';
import Capacity from './Capacity';
import RecrutimentText from './RecrutimentText';
import BreakUnderLine from './BreakUnderLine';
import HeadLine2 from './HeadLine2';

import './css/InTheRoom.css';

export default function InTheRoom() {
  return (
    <div id="in-the-room">
      <Header room="inTheRoom" />
      <Body>
        <SideMenu>
          <div className="menu-wrapper menu-wrapper-1">
            <MenuHeader text="メンバー" />
            <MenuInnerWrappr>
              <UserPlate icon="" name="UserName" />
              <UserPlate icon="" name="UserName" />
              <UserPlate icon="" name="UserName" />
              <UserPlate icon="" name="UserName" />
            </MenuInnerWrappr>
          </div>
          <div className="menu-wrapper menu-wrapper-2 menu-wrapper-last">
            <MenuHeader text="ルーム情報" />
            <MenuInnerWrappr>
              <GamePlate hard="" title="タイトル" />
              <BreakUnderLine />
              <Capacity capacity="4" />
              <BreakUnderLine />
              <HeadLine2>募集テキスト</HeadLine2>
              <RecrutimentText />
              <BreakUnderLine />
            </MenuInnerWrappr>
          </div>
        </SideMenu>

        <MainBody>
          <ChatArea />
        </MainBody>
      </Body>
      <ExitButton />
      <Footer />
    </div>
  );
}
