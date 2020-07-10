import React from 'react';
import { inputValidation } from '../store/validation/Validation';
import './css/ShadowTextArea.css';

// TODO データストア
export default function ShadowTextArea({
  placeholder,
  auto_flg = false,
  value,
  data_list,
  actions,
}) {
  if (auto_flg) {
    return (
      <div className="shadow-text-area">
        <input
          type="text"
          name={value}
          placeholder={placeholder}
          onChange={(e) => inputValidation({ value: e.target.value, name: e.target.name }, actions)}
          autoComplete="on"
          list="list"
        />
        <div className="shadow-underline"></div>
        <datalist id="list">
          {data_list.map((d, i) => (
            <option key={i}>{d[value]}</option>
          ))}
        </datalist>
      </div>
    );
  }
  return (
    <div className="shadow-text-area">
      <input type="text" placeholder={placeholder} onChange={(e) => actions(e.target.value)} />
      <div className="shadow-underline"></div>
    </div>
  );
}
