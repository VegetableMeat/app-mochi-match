import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Logout extends Component {
  logout = () => {
    localStorage.removeItem('jwt');
  };

  render() {
    return (
      <div id="logout">
        <Header />
        <Body>
          <h1>Logout画面です</h1>
          <Link to={'/'} onClick={() => this.logout()}>
            ログアウトする
          </Link>
        </Body>
        <Footer />
      </div>
    );
  }
}
