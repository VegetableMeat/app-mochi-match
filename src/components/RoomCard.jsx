import React, { useRef, useEffect } from "react";
import ReservationTime from "./ReservationTime";
import SimpleProfile from "./SimpleProfile";
import GamePlate from "./GamePlate";
import Capacity from "./Capacity";
import RecrutimentText from "./RecrutimentText";
import RecrutimentTime from "./RecrutimentTime";
import moment from "moment";
import "moment/locale/ja";
import "./css/RoomCard.css";

const RoomCard = ({ room, onCardClick }) => {
  let gameName = room.title;
  if (15 < gameName.length) {
    gameName = gameName.slice(0, 14) + "...";
  }
  return (
    <div className="room-card" onClick={() => onCardClick(room)}>
      {room.start && <ReservationTime start={room.start} />}
      <SimpleProfile icon={room.icon} name={room.name} />
      <GamePlate hard={room.hard} title={gameName} />
      <Capacity capacity={room.capacity} count={room.count} />
      <RecrutimentText text={room.text} />
      <RecrutimentTime created={moment(room.created).fromNow()} />
    </div>
  );
};

export default RoomCard;
