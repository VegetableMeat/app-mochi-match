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
                    <div className="menu-wrapper menu-wrapper-1 account-side-menu">
                        <MenuHeader text="メニュー" />
                        <MenuInnerWrapper>
                        <ul>
                            <Link to="/"><li><i class="far fa-id-card"></i>Profile</li></Link>
                            <Link to="/"><li><i class="fas fa-user-cog"></i>Setting</li></Link>
                            <Link to="/History"><li><i class="fas fa-history"></i>Play History</li></Link>
                        </ul>
                        </MenuInnerWrapper>
                    </div>
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