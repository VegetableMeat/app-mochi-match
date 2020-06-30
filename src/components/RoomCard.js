import React from 'react';
import './css/RoomCard.css';
import ReservationTime from './ReservationTime';
import SimpleProfile from './SimpleProfile';
import GamePlate from './GamePlate';
import Capacity from './Capacity';
import RecrutimentText from './RecrutimentText';
import RecrutimentTime from './RecrutimentTime';

export default function RoomCard({ data, actions }) {
  return (
    <div className="room-card" onClick={() => actions.showModalTrue("TOP_ROOM_IN", "room", data)}>
      {data.start && <ReservationTime start={data.start}/>}
      <SimpleProfile icon={data.icon} name={data.name}/>
      <GamePlate hard={data.hard} title={data.title}/>
      <Capacity capacity={data.capacity}/>
      <RecrutimentText text={data.text}/>
      <RecrutimentTime created={data.created}/>
    </div>
  )
}