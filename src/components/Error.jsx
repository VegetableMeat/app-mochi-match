import React from "react";
import "./css/Error.css";
const Error = ({ text }) => {
  return (
    <div className="error">
      <b>{text}</b>
    </div>
  );
};

export default Error;
