import React from "react";
import { inputValidation } from "../store/validation/Validation";
import "./css/ShadowTextArea.css";

const ShadowTextArea = ({ placeholder = "", actions }) => {
  return (
    <div className="shadow-text-area">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => actions(e.target.value)}
      />
      <div className="shadow-underline"></div>
    </div>
  );
};

export default ShadowTextArea;
