import React from 'react';
import './css/GamePlate.css';
import HardIcon from './HardIcon';
import GameNamePlate from './GameNamePlate';

export default function GamePlate({ hard, title }) {
  return (
    <div className="game-plate">
      <HardIcon hard={hard}/>
      <GameNamePlate title={title}/>
    </div>   
  )
}