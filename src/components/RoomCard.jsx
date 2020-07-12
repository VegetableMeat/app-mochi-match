import React from 'react';
import './css/RoomCard.css';
import ReservationTime from './ReservationTime';
import SimpleProfile from './SimpleProfile';
import GamePlate from './GamePlate';
import Capacity from './Capacity';
import RecrutimentText from './RecrutimentText';
import RecrutimentTime from './RecrutimentTime';

const RoomCard = ({ data, actions, onCardClick }) => {

  const d = new Date(data.created);
  const formatteDate = `
  ${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}
  `.replace(/\n|\r/g, '');

  return (
    <div className="room-card" onClick={() => onCardClick(data)}>
      {data.start && <ReservationTime start={data.start} />}
      <SimpleProfile
        icon={data.icon}
        name={data.name}
      />
      <GamePlate
        hard={data.hard}
        title={data.title}
      />
      <Capacity
        capacity={data.capacity}
        count={data.count}
      />
      <RecrutimentText
        text={data.text}
      />
      <RecrutimentTime
        created={formatteDate}
      />
    </div>
  );

};

export default RoomCard;
