import React from 'react';
import './css/UserIconSelectArea.css';

export default function UserIconSelectArea(props) {
    return (
        <div className="user-icon-select-area">
            {props.children}
        </div>
    )
}