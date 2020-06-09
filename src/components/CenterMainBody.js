import React from 'react';

import './css/CenterMainBody.css';

export default function CenterMainBody(props) {
  return (
    <div className="center-main-body">
      {props.children}
    </div>
  )
}
