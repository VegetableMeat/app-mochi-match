import React from 'react';
import './Header.css';
import CreateRoomButton from '../containers/CreateRoomButton';

export default function Header({ title }) {
    return (
        <div id="header">
            HEADER
            {title}
            <CreateRoomButton  />
        </div>   
    )
}