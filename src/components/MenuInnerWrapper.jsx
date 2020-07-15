import React from "react";
import "./css/MenuInnerWrapper.css";

const MenuInnerWrapper = ({ children, id }) => {
  return (
    <div className="menu-inner-wrapper" id={id}>
      {children}
    </div>
  );
};

export default MenuInnerWrapper;
