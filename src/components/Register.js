import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import CenterMainBody from './CenterMainBody';
import Modal from '../containers/ModalContainer';
import BodyHeader from './BodyHeader';

import './css/Sign.css';

export default function Register() {
  return (
    <div id="register">
      <Header />
      <Body>
        <CenterMainBody>
          <BodyHeader>
            新規登録
          </BodyHeader>
          <div className="button-area">
            <button className="facebook">Facebookアカウントで新規登録</button>
            <button className="twitter">Twitterアカウントで新規登録</button>
            <button className="google">Googleアカウントで新規登録</button>
          </div>
          <div className="link-area">
            <Link to="/Login">ログイン</Link>はこちら
          </div>
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  )
}
