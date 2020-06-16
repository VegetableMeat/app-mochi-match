import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import CenterMainBody from './CenterMainBody';
import Modal from '../containers/ModalContainer';
import BodyHeader from './BodyHeader';

import './css/Sign.css';

export default function Login() {
  return (
    <div id="login">
      <Header />
      <Body>
        <CenterMainBody>
          <BodyHeader>
            ログイン・新規登録
          </BodyHeader>
          <p>ログインまたは新規登録をするアカウントを選択してください</p>
          <div className="button-area">
            <button className="facebook"><i class="fab fa-facebook-f"></i>Facebookアカウント</button>
            <button className="twitter"><i class="fab fa-twitter"></i>Twitterアカウント</button>
            <button className="google"><i class="fab fa-google-plus-g"></i>Googleアカウント</button>
          </div>
          <div className="link-area">
            <Link to="/Register">新規登録</Link>はこちら
          </div>
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  )
}
