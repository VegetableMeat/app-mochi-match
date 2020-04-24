import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../containers/Header';
import Footer from './Footer';
import Body from './Body';

export default function Top() {
  return (
    <div className="top">
      <Header />
      <Body>
        <h1>TOP画面です</h1>
        <Link to='/gameCreate'>ゲーム作成画面へ</Link>
      </ Body>
      <Footer />
    </div>
  )
}
