import React from "react";
import "./css/GameNamePlate.css";

export default function GameNamePlate({ title, value, click = null }) {
  if (click) {
    return (
      <div className="game-name-plate" onClick={() => click(value)}>
        <div className="game-title">{title}</div>
      </div>
    );
  }

  return (
    <div className="game-name-plate">
      <div className="game-title">{title}</div>
    </div>
  );
}

export default GameNamePlate;
