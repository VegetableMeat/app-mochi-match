import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import MainBody from './MainBody';
import SideMenu from './SideMenu';
import MenuHeader from './MenuHeader';
import MenuInnerWrappr from './MenuInnerWrapper';
import UserPlate from './UserPlate';
import ChatArea from './../containers/ChatAreaContainer';
import ChatDisplay from './ChatDisplay';
import SimpleProfile from './SimpleProfile';
import ExitButton from './ExitButton';
import UserStatus from './UserStatus';
import GamePlate from './GamePlate';
import Capacity from './Capacity';
import RecruitmentText from './RecruitmentText';
import BreakUnderLine from './BreakUnderLine';
import HeadLine2 from './HeadLine2';

import './css/InTheRoom.css';

export default class InTheRoom extends Component {
  render() {
    const { state, actions } = this.props;
    return (
      <div id="in-the-room" >
        <Header />
        <Body>
          <SideMenu>
            <MenuHeader text="メンバー" />
            <MenuInnerWrappr>
              {state.join_users.map((data) => (
                < UserPlate key={data.user_id} icon={data.icon} name={data.user_name} />
              ))}
            </MenuInnerWrappr>
            <MenuHeader text="ルーム情報" />
            <MenuInnerWrappr>
              <GamePlate hard="" title={state.room.title} />
              <BreakUnderLine />
              <Capacity capacity={state.room.capacity} count={state.room.count} />
              <BreakUnderLine />
              <HeadLine2>{state.room.text}</HeadLine2>
              <RecruitmentText />
              <BreakUnderLine />
            </MenuInnerWrappr>
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
}
