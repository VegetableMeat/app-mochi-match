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

import './css/History.css';

export default function History() {
    return (
        <div id="history">
            <Header />
            <Body>
                <SideMenu>
                    <div className="menu-wrapper menu-wrapper-1">
                        <MenuHeader text="メニュー" />
                        <MenuInnerWrapper>
                            
                        </MenuInnerWrapper>
                    </div>
                    <UnderLineList />
                </SideMenu>
                <MainBody>
                    <RadiusBodyHeader />
                    <RadiusWhiteCard>
                        <UserPlate />
                    </RadiusWhiteCard>
                </MainBody>
                   
            </Body>
            <Footer />
        </div>
    )
} 