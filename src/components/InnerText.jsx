import React from 'react';

import './css/InnerText.css';

export default function InnerText(props) {
  return <div className="inner-text">{props.children}</div>;
}
