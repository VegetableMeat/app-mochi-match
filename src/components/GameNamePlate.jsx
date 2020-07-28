import React from "react";
import "./css/GameNamePlate.css";

const GameNamePlate = ({ key = 0, title, value, isAction = false, action }) => {
  // if (click) {
  //   return (
  //     <div className="game-name-plate" onClick={() => click(value)}>
  //       <div className="game-title">{title}</div>
  //     </div>
  //   );
  // }

  return (
    <div
      key={key}
      className="game-name-plate"
      onClick={isAction ? () => action(value) : () => {}}
    >
      <div className="game-title">{title}</div>
    </div>
  );
};

export default GameNamePlate;
