import React from 'react';

import HeaderMenu from '../containers/HeaderMenuContainer';
import './css/Header.css';

export default function Header() {
  return (
    <div id="header">
      <div className="title">
        もちまっちげーみんぐ
      </div>
      <HeaderMenu />
    </div>
  )
}
