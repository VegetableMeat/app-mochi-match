import React from 'react';

import RoomCard from './RoomCard';
import './css/RoomContents.css';

const RoomContents = ({ state, actions, history }) => {

  const { roomState } = state;

  const onCardClick = (data) => {
    if (roomState.room.room_id === data.room_id) {
      history.push("intheroom");
      actions.showModalFalse();
    } else if (roomState.isEntry) {
      data.owner_id === state.userState.user.user_id ?
        actions.showModalTrue("ROOM_DELETION_AND_JOIN", "room", data) :
        actions.showModalTrue("ROOM_LEAVE_AND_JOIN", "room", data)
    } else {
      actions.showModalTrue("TOP_ROOM_IN", "room", data);
    };
  };

  return (
    <div className="room-contents">
      {state.roomListState.data.map((data) => (
        <RoomCard key={data.room_id} data={data} actions={actions} onCardClick={onCardClick} />
      ))}
    </div>
  );

};

export default RoomContents;

