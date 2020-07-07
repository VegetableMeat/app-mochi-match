import React from 'react';
import './css/ShadowTextArea.css';
import { CardActions } from '@material-ui/core';
// TODO データストア
export default function ShadowTextArea({ placeholder, actions, data_list }) {
  return (
    <div className="shadow-text-area">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => actions(e.target.value)}
        autocomplete="on"
        list="list"
      />
      <div className="shadow-underline"></div>
      <datalist id="list">
        {data_list ? data_list.map((d, i) => <option key={i}>{d.game_title}</option>) : null}
      </datalist>
    </div>
  );
}
