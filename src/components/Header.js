import React from 'react';
import './css/Header.css';

export default function Header() {
  return (
    <div id="header">
        <div className="title">
            もちまっちげーみんぐ
        </div>
        <div className="header-menu-icon">
            <i class="fas fa-user-circle"></i>
        </div>
        <div className="header-menu">
            <ul className="header-menu-list">
                <li>Login</li>
                <li>Sign Up</li>
                <li>Profile</li>
                <li>Config</li>
                <li>Play History</li>
            </ul>
        </div>
    </div>
  )
}
