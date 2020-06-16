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
import BodyHeader from './BodyHeader';
import HeadLine1 from './HeadLine1';
import DangerButton from './DangerButton';

export default function Configuration() {
    return (
        <div id="configuration">
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
                    <DangerButton />
                </MainBody>
            </Body>
            <Footer />
        </div>
    )
} 