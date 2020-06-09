import React from 'react';
import './css/ShadowTextArea.css';

export default function ShadowTextArea() {
  return (
    <div className="shadow-text-area">
      <input type="text"></input>
      <div className="shadow-underline"></div>
    </div>   
  )
}