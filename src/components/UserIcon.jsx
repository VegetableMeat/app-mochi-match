import React from "react";
import "./css/UserIcon.css";
import { select } from "redux-saga/effects";

export default function UserIcon({ selectFlg }) {
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
}
