import React from 'react';
import './css/GameNamePlate.css';

export default function GameNamePlate({ title, click }) {
  if (click) {
    return (
      <div className="game-name-plate" onClick={() => click(title)}>
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
