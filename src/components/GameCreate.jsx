import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export default function GameCreate() {
  return (
    <div className="game-create">
      <Header />
      <Body>
        <h1>ゲーム作成画面です</h1>
        <Link to="/">TOP画面へ</Link>
      </Body>
      <Footer />
    </div>
  );
}
