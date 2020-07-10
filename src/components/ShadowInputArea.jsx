import React from 'react';
import './css/ShadowInputArea.css';

export default function ShadowInputArea({ placeholder, value, onChangeValue }) {
  return (
    <div className="shadow-input-area">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}></input>
    </div>
  );
}
