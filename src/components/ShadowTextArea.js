import React from 'react';
import './css/ShadowTextArea.css';

export default function ShadowTextArea({ placeholder }) {
  return (
    <div className="shadow-text-area">
      <input type="text" placeholder={placeholder}></input>
      <div className="shadow-underline"></div>
    </div>   
  )
}
