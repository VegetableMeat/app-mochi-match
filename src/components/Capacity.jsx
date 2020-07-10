import React from 'react';
import './css/Capacity.css';
import { tsPropertySignature } from '@babel/types';

export default function Capacity({ capacity, count }) {
  return (
    <div className="capacity">
      <div className="label">定員：</div>
      <div className="value">
        {count}/{capacity}
      </div>
    </div>
  );
}
