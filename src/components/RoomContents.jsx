import React from 'react';
import RoomCard from './RoomCard';
import './css/RoomContents.css';

const RoomContents = ({ state, actions, history }) => {

  const { roomState, roomListState, userState } = state;
  const { room, isEntry } = roomState;

  const onCardClick = (data) => {
    if (room.room_id === data.room_id) {
      history.push("intheroom");
      actions.showModalFalse();
      return;
    }
    if (isEntry) {
      data.owner_id === userState.user.user_id ?
        actions.showModalTrue("ROOM_DELETION_AND_JOIN", "room", data) :
        actions.showModalTrue("ROOM_LEAVE_AND_JOIN", "room", data)
      return;
    }
    actions.showModalTrue("TOP_ROOM_IN", "room", data);
  };

  return (
    <div className="room-contents">
      {roomListState.data.map((data) => (
        <RoomCard
          key={data.room_id}
          room={data}
          actions={actions}
          onCardClick={onCardClick} />
      ))}
    </div>
  );

};

export default RoomContents;
