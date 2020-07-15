import React from "react";
import "./css/GameNamePlate.css";

const GameNamePlate = ({ title }) => {
  return (
    <div className="game-name-plate">
      <div className="game-title">{title}</div>
    </div>
  );
};

export default GameNamePlate;
