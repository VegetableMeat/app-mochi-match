import React from 'react';
import './css/body.css';

export default function body({ room }) {
const rooms = room.map((name, key) => <div key={key}>{name}{key}</div>)
    return (
        <div id="body">
            {rooms}
        </div>   
    )
}