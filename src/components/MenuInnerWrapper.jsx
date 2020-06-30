import React from 'react';

import './css/MenuInnerWrapper.css';

export default function MenuInnerWrapper(props, { id }) {
  return (
    <div className="menu-inner-wrapper" id={id}>
      {props.children}
    </div>
  );
}
