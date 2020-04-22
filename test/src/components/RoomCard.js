import React from 'react'
import './RoomCard.css';

const Todo = ({ id, host, game }) => (
  <li className="room-card">
    id : {id}
    ________
    host : {host}
    ________
    game : {game}
  </li>
)

export default Todo