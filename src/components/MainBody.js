import React from 'react';

import './css/MainBody.css';

export default function MainBody(props) {
  return (
    <div className="main-body">
      {props.children}
    </div>
  )
}
