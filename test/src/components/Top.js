import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../containers/Header';
import Footer from './Footer';
import Body from './Body';
import MainBody from './MainBody';
import SideMenu from './SideMenu';
import CreateRoomButton from './CreateRoomButton';
import PageNation from './PageNation';

export default function Top() {
  return (
    <div className="top">
      <Header />
      <Body>
        <SideMenu>

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
