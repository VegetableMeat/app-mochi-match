import React from 'react';

import './css/PageNation.css';

export default function PageNation() {
  return (
    <div className="pagenation">
      <button className="prev">
        <i class="fas fa-angle-left"></i>
      </button>

      <button className="number select">1</button>
      <button className="number">2</button>
      <button className="number">3</button>

      <button className="next">
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  );
}
