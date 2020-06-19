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

export default function ProfileSetting() {
    return (
        <div id="profilesetting">
            <Header />
            <Body>
                <SideMenu>
                    <div className="menu-wrapper menu-wrapper-1">
                        <MenuHeader text="プロフィール" />
                        <MenuInnerWrapper>
                        </MenuInnerWrapper>
                    </div>
                    <div className="menu-wrapper menu-wrapper-2">
                        <MenuHeader text="設定" />
                        <MenuInnerWrapper>
                        </MenuInnerWrapper>
                    </div>
                    <div className="menu-wrapper menu-wrapper-3">
                        <MenuHeader text="プレイ履歴" />
                        <MenuInnerWrapper>
                        </MenuInnerWrapper>
                    </div>
                    <UnderLineList />
                </SideMenu>
                <MainBody>
                    <BodyHeader />
                    <HeadLine1 />
                    <UnderLineInput />
                    <UserIconSelectArea>
                        <UserIcon />
                    </UserIconSelectArea>
                    <HeadLine2 />
                    <FavoriteGameList>
                        <GameNamePlate />
                    </FavoriteGameList>
                    <HeadLine3 />
                    <FavoriteGameAddArea />
                </MainBody>
            </Body>
			<Footer />
        </div>

    )
}