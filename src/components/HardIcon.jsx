import React from "react";
import { inputValidation } from "../store/validation/Validation";
import "./css/HardIcon.css";

export default function HardIcon({
  id,
  actions,
  data,
  name,
  select_flg = false,
}) {
  if (select_flg) {
    return (
      <div className="hard-icon">
        <div className="select"></div>
        <div className="icon"></div>
      </div>
    );
  }
  return (
    <div className="hard-icon">
      <div
        className="icon"
        onClick={() =>
          inputValidation({ value: id, name: name }, actions, data)
        }
      ></div>
    </div>
  );
}
