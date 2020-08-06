import React from "react";
import "./css/SerchButton.css";

const SerchButton = ({ action, room }) => {
  return (
    <button
      className="serch-button"
      onClick={() => action(room.selectPage, room.selectTitle, room.selectHard)}
    >
      検索
    </button>
  );
};

export default SerchButton;
