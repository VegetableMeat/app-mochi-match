import React from 'react';

import './css/RoomContents.css';

export default function RoomContents(props) {
  return (
    <div className="room-contents">
      {props.children}
    </div>
  )
}
