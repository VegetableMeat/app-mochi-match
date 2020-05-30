import React from 'react';
import './css/GameNamePlate.css';

export default function GameNamePlate({ title }) {
  return (
    <div className="game-name-plate">
        <div className="game-title">
            {title}
        </div>
    </div>   
  )
}