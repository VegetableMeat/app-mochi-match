import React from "react";
import UserIcon from "./UserIcon";
import UserName from "./UserName";
import "./css/UserPlate.css";

const UserPlate = ({ icon, name, id, onPlateClick }) => {
  return (
    <div className="user-plate" onClick={() => onPlateClick(id)}>
      <UserIcon value={icon} />
      <UserName name={name} />
    </div>
  );
};

export default UserPlate;
