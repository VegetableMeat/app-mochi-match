import React, { forwardRef, useEffect } from "react";
import HardIcon from "./HardIcon";
import GameNamePlate from "./GameNamePlate";
import "./css/GamePlate.css";

const GamePlate = forwardRef(({ hard, title }) => {
  return (
    <div className="game-plate">
      <HardIcon hard={hard} hard_name={hard} />
      <GameNamePlate title={title} />
    </div>
  );
});

export default GamePlate;
