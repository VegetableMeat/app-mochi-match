import React from 'react';
import './css/MenuHeader.css';

export default function MenuHeader({ text }) {
  return (
    <div className="menu-header">
      <div className="menu-header-text">{text}</div>
    </div>
  );
}
