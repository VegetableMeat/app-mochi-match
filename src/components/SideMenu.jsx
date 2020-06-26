import React from 'react';

import './css/SideMenu.css';

export default function SideMenu(props) {
  return <div className="side-menu">{props.children}</div>;
}
