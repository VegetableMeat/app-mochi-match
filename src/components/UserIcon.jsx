import React from "react";
import { inputValidation } from "../store/validation/Validation";
import "./css/UserIcon.css";

const UserIcon = ({
  name,
  value,
  actions,
  isSelect = false,
  isValidate = false,
  list = [],
}) => {
  return (
    <div
      className="user-icon"
      onClick={
        isValidate && !isSelect
          ? () =>
              inputValidation({
                name: name,
                value: value,
                action: actions,
                list: list,
              })
          : () => {}
      }
    >
      {isSelect && <div className="select"></div>}
      <div className="icon"></div>
    </div>
  );
};

export default UserIcon;
