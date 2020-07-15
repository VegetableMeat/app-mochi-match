import React from "react";
import "./css/UserIcon.css";

const UserIcon = ({ selectFlg }) => {
  if (selectFlg === "true") {
    return (
      <div className="user-icon">
        <div className="select"></div>
        <div className="icon"></div>
      </div>
    );
  } else {
    return (
      <div className="user-icon">
        <div className="icon"></div>
      </div>
    );
  }
};

export default UserIcon;
