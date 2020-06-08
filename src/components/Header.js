import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';

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
                <li><Link to="/Login"><i class="fas fa-sign-in-alt"></i>Login</Link></li>
                <li><i class="fas fa-user-plus"></i>Sign Up</li>
                <li><i class="far fa-id-card"></i>Profile</li>
                <li><i class="fas fa-user-cog"></i>Setting</li>
                <li><i class="fas fa-history"></i>Play History</li>
            </ul>
        </div>
    </div>
  )
}
