import React from "react";
import { inputValidation } from "../store/validation/Validation";
import "./css/ShadowTextArea.css";
import _default from "@ant-design/icons/lib/icons/ArrowLeftOutlined";

const ShadowTextArea = ({
  name,
  actions,
  placeholder = "",
  isValidate = false,
  list = [],
  defaultValue = "",
}) => {
  return (
    <div className="shadow-text-area">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) =>
          isValidate
            ? inputValidation({
                name: name,
                value: e.target.value,
                action: actions,
                list: list,
              })
            : actions(e.target.value)
        }
        value={defaultValue}
      />
      <div className="shadow-underline"></div>
    </div>
  );
};

export default ShadowTextArea;
