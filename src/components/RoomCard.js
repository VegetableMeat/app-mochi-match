import React from 'react';
import './css/RoomCard.css';
import ReservationTime from './ReservationTime';
import SimpleProfile from './SimpleProfile';
import GamePlate from './GamePlate';
import Capacity from './Capacity';
import RecrutimentText from './RecrutimentText';
import RecrutimentTime from './RecrutimentTime';

export default function RoomCard() {
  return (
    <div className="room-card">
        <ReservationTime />
        <SimpleProfile />
        <GamePlate />
        <Capacity />
        <RecrutimentText />
        <RecrutimentTime />
    </div>
  )
}