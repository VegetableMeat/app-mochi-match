import React from "react";
import UserIcon from "./UserIcon";
import UserName from "./UserName";
import "./css/SimpleProfile.css";

const SimpleProfile = ({ icon, name }) => {
  return (
    <div className="simple-profile">
      <UserIcon value={icon} />
      <UserName name={name} />
    </div>
  );
};

export default SimpleProfile;
