import React from 'react';
import './css/ShadowTextArea.css';
import { CardActions } from '@material-ui/core';

export default function ShadowTextArea({ placeholder, actions }) {
  return (
    <div className="shadow-text-area">
      <input type="text" placeholder={placeholder} onChange={(e) => actions(e.target.value)} />
      <div className="shadow-underline"></div>
    </div>
  );
}
