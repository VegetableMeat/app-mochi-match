import React from 'react';
import './css/RecrutimentTime.css';

export default function RecrutimentTime({ created }) {
  return (
    <div className="recrutiment-time">
      {created}
    </div>   
  )
}