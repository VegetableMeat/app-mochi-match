import React from "react";
import { inputValidation } from "../store/validation/Validation";
import "./css/HardIcon.css";

export default function HardIcon({
  name,
  id,
  actions,
  isSelect = false,
  isValidate = false,
  list = [],
}) {
  return (
    <div className="hard-icon">
      {isSelect && <div className="select"></div>}
      <div
        className="icon"
        onClick={
          isValidate && !isSelect
            ? () =>
                inputValidation({
                  name: name,
                  value: id,
                  action: actions,
                  list: list,
                })
            : {}
        }
      ></div>
    </div>
  );
}
