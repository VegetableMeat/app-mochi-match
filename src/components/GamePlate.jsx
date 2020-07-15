import React from "react";
import HardIcon from "./HardIcon";
import GameNamePlate from "./GameNamePlate";
import "./css/GamePlate.css";

const GamePlate = ({ hard, title }) => {
  return (
    <div className="game-plate">
      <HardIcon hard={hard} />
      <GameNamePlate title={title} />
    </div>
  );
};

export default GamePlate;
