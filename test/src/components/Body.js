import React from 'react';
import './Body.css';

export default function Body({ room }) {
const rooms = room.map((name, key) => <div key={key}>{name}{key}</div>)
    return (
        <div id="body">
            {rooms}
        </div>   
    )
}