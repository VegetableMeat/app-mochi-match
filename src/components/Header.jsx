import React from 'react';

import HeaderMenu from '../containers/HeaderMenuContainer';
import './css/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id="header">
      <div className="title">
        <Link to="/">もちまっちげーみんぐ</Link>
      </div>
      <HeaderMenu />
    </div>
  );
}
