import React from 'react';
import './css/HardIcon.css';

export default function HardIcon({ id, click, select_flg = false }) {
  if (select_flg) {
    return (
      <div className="hard-icon">
        <div className="select"></div>
        <div className="icon"></div>
      </div>
    );
  }
  return (
    <div className="hard-icon">
      <div className="icon" onClick={() => click(id)}></div>
    </div>
  );
}
