import React from "react";
import UserIcon from "./UserIcon";
import UserName from "./UserName";
import DetailsButton from "./DetailsButton";
import "./css/UserPlate.css";

const UserPlate = ({ icon, name, id }) => {
  return (
    <div className="user-plate">
      <UserIcon icon={icon} />
      <UserName name={name} />
    </div>
  );
};

export default UserPlate;
