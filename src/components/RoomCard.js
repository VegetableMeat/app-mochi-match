import React from 'react';
import './css/RoomCard.css';

export default function RoomCard(props) {
  return (
    <div className="room-card">
      {props.children}
    </div>
  )
}