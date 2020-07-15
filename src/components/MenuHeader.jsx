import React from "react";
import "./css/MenuHeader.css";

const MenuHeader = ({ text }) => {
  return (
    <div className="menu-header">
      <div className="menu-header-text">{text}</div>
    </div>
  );
};

export default MenuHeader;
