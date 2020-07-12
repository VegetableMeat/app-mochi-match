import React from 'react';
import RoomCard from './RoomCard';
import './css/RoomContents.css';

const RoomContents = ({ state, actions }) => {

  const onCardClick = (data) => {
    if (state.roomState.isEntry) {
      data.owner_id === state.userState.user.user_id ?
        console.log("既に立てているルームを解散するか確認") :
        console.log("前のルームを抜けるか確認")
    } else {
      actions.showModalTrue("TOP_ROOM_IN", "room", data)
    }
  }

  return (
    <div className="room-contents">
      {state.roomListState.data.map((data) => (
        <RoomCard key={data.room_id} data={data} actions={actions} onCardClick={onCardClick} />
      ))}
    </div>
  );

};

export default RoomContents;

