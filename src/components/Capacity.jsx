import React from 'react';
import './css/Capacity.css';

const Capacity = ({ capacity, count }) => {

  return (
    <div className="capacity">
      <div className="label">定員：</div>
      <div className="value">
        {count}/{capacity}
      </div>
    </div>
  );

};

export default Capacity;

