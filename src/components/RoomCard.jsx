import React from 'react';
import ReservationTime from './ReservationTime';
import SimpleProfile from './SimpleProfile';
import GamePlate from './GamePlate';
import Capacity from './Capacity';
import RecrutimentText from './RecrutimentText';
import RecrutimentTime from './RecrutimentTime';
import './css/RoomCard.css';

const RoomCard = ({ room, onCardClick }) => {

  const d = new Date(room.created);
  const formatteDate = `
  ${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}
  `.replace(/\n|\r/g, '');

  return (
    <div className="room-card" onClick={() => onCardClick(room)}>
      {room.start && <ReservationTime start={room.start} />}
      <SimpleProfile
        icon={room.icon}
        name={room.name} />
      <GamePlate
        hard={room.hard}
        title={room.title} />
      <Capacity
        capacity={room.capacity}
        count={room.count} />
      <RecrutimentText
        text={room.text} />
      <RecrutimentTime
        created={formatteDate} />
    </div>
  );

};

export default RoomCard;
