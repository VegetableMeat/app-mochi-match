import React from 'react';
import './css/header.css';
import CreateRoomButton from '../containers/createRoomButton';

export default function header({ title }) {
    return (
        <div id="header">
            HEADER
            {title}
            <CreateRoomButton />
        </div>   
    )
}