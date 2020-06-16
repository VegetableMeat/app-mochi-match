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
import RecruitmentText from './RecruitmentText';
import BreakUnderLine from './BreakUnderLine';

export default function InTheRoom() {
    return (
        <div id="InTheRoom">
            <Header />
            <Body>
                <SideMenu>
                    <MenuHeader text="メンバー" />
                    <MenuInnerWrappr>
                        <UserStatus />
                        <UserPlate />
                    </MenuInnerWrappr>


                    <MenuHeader text="ルーム情報" />
                    <MenuInnerWrappr>
                        <GamePlate />
                        <BreakUnderLine />
                        <Capacity />
                        <BreakUnderLine />
                        <RecruitmentText />
                        <BreakUnderLine />
                    </MenuInnerWrappr>


                </SideMenu>

                <MainBody>
                    <ChatArea>
                        <ChatDisplay>
                            <SimpleProfile />
                        </ChatDisplay>
                    </ChatArea>
                </MainBody>
            </ Body>
            <ExitButton />
            <Footer />
        </div>
    )
}





