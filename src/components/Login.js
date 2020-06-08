import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import CenterMainBody from './CenterMainBody';
import Modal from '../containers/ModalContainer';

import './css/Login.css';

export default function Login() {
  return (
    <div id="login">
      <Header />
      <Body>
        <CenterMainBody>
          
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  )
}
