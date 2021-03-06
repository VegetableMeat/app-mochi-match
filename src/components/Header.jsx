import React from "react";
import HeaderMenu from "../containers/HeaderMenuContainer";
import ExitButton from "./ExitButton";
import "./css/Header.css";

const Header = ({ room, state, actions, history }) => {
  const { roomState, userState, roomListState } = state;

  const handleOnClick = () => {
    if (room === "top") {
      window.location.reload();
      return;
    }
    history.push(`/?page=${roomListState.selectPage}`);
  };

  if (room === "inTheRoom") {
    return (
      <div id="header">
        <ExitButton
          room={roomState.room}
          user={userState.user}
          actions={actions}
          history={history}
        />
        <div className="title" onClick={() => handleOnClick()}>
          もちまっちげーみんぐ
        </div>
        <HeaderMenu />
      </div>
    );
  } else {
    return (
      <div id="header">
        <div className="title" onClick={() => handleOnClick()}>
          もちまっちげーみんぐ
        </div>
        <HeaderMenu />
      </div>
    );
  }
};

export default Header;
