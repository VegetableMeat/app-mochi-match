import React from "react";

import HeaderMenu from "../containers/HeaderMenuContainer";
import ExitButton from "./ExitButton";
import "./css/Header.css";
import { Link } from "react-router-dom";

export default function Header({ room }) {
  if (room === "inTheRoom") {
    return (
      <div id="header">
        <ExitButton />
        <div className="title">
          <Link to="/">もちまっちげーみんぐ</Link>
        </div>
        <HeaderMenu />
      </div>
    );
  } else {
    return (
      <div id="header">
        <div className="title">
          <Link to="/">もちまっちげーみんぐ</Link>
        </div>
        <HeaderMenu />
      </div>
    );
  }
}
