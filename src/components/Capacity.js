import React from 'react';
import './css/Capacity.css';
import { tsPropertySignature } from '@babel/types';

export default function Capacity({ capacity }) {
  return (
    <div className="capacity">
      <div className="label">定員：</div>
      <div className="value">{capacity}/{capacity}</div>
    </div>   
  )
}