import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import CenterMainBody from './CenterMainBody';
import Modal from '../containers/ModalContainer';
import BodyHeader from './BodyHeader';

import './css/Login.css';

export default function Login() {
  return (
    <div id="login">
      <Header />
      <Body>
        <CenterMainBody>
          <BodyHeader>
            ログイン
          </BodyHeader>
          <div className="button-area">
            <button className="facebook">Facebookアカウントでログイン</button>
            <button className="twitter">Twitterアカウントでログイン</button>
            <button className="google">Googleアカウントでログイン</button>
          </div>
          <div className="register-link-area">
            <Link>新規登録</Link>はこちら
          </div>
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  )
}
