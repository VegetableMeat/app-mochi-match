import React from "react";
import "./css/ExitButton.css";

const ExitButton = ({ room, user, actions }) => {
  const onLeaveButtonClick = () => {
    room.owner_id === user.user_id
      ? actions.showModalTrue("ROOM_DELETION", "room", room)
      : actions.showModalTrue("ROOM_LEAVE", "room", room);
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
