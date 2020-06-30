import React from 'react';
import './css/ShadowInputArea.css';

export default function ShadowInputArea({ placeholder }) {
  return (
    <div className="shadow-input-area">
      <input type="text" placeholder={placeholder}></input>
    </div>
  );
}
