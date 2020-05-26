import React from 'react';
import './css/GamePlate.css';
import HardIcon from './HardIcon';
import GameNamePlate from './GameNamePlate';

export default function GamePlate() {
  return (
    <div className="game-plate">
      <HardIcon />
      <GameNamePlate />
    </div>   
  )
}