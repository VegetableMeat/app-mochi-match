import React from "react";
import "./css/ExitButton.css";

const ExitButton = ({ room, user, actions, history }) => {
  const onLeaveButtonClick = () => {
    room.owner_id === user.user_id
      ? actions.showModalTrue("ROOM_DELETION", "room", room)
      : actions.leaveRoomRequest(room, history);
  };

  return (
    <div className="exit-button">
      <button onClick={() => onLeaveButtonClick()}>
        <i className="fas fa-external-link-alt"></i>
      </button>
    </div>
  );
};

export default ExitButton;
