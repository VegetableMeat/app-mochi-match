import React from "react";
import "./css/RemoveButton.css";

const RemoveButton = ({ actions, room }) => {
  return (
    <button
      className="remove-button"
      onClick={() => {
        actions.removeSearchTitle(null);
        actions.removeSearchHard(null);
        actions.getRoomReq(room.selectPage);
      }}
    >
      条件を削除
    </button>
  );
};

export default RemoveButton;
