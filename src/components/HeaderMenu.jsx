import React from "react";
import { Link } from "react-router-dom";
import { ClickAwayListener } from "@material-ui/core";
import { useEffect } from "react";

const HeaderMenu = ({ state, actions }) => {
  const { headerMenuState, userState } = state;

  return (
    <ClickAwayListener onClickAway={() => actions.showHeaderMenuFalse()}>
      <div
        className="header-menu-wrapper"
        onClick={() => actions.showHeaderMenuTrue()}
        onMouseEnter={() => actions.showHeaderMenuTrue()}
        onMouseLeave={() => actions.showHeaderMenuFalse()}
      >
        <div className="header-menu-icon">
          <i className="fas fa-user-circle"></i>
        </div>
        {headerMenuState.showFlag ? (
          <div className="header-menu">
            <ul className="header-menu-list">
              {localStorage.getItem("access_token") ? (
                <Link to="/logout">
                  <li>
                    <i className="fas fa-sign-in-alt"></i>Logout
                  </li>
                </Link>
              ) : (
                <Link to="/login">
                  <li>
                    <i className="fas fa-sign-in-alt"></i>Login
                  </li>
                </Link>
              )}
              <Link to="/profilesetting">
                <li>
                  <i className="far fa-id-card"></i>Profile
                </li>
              </Link>
              <Link to="/configuration">
                <li>
                  <i className="fas fa-user-cog"></i>Setting
                </li>
              </Link>
              <Link to="/history">
                <li>
                  <i className="fas fa-history"></i>Play History
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default HeaderMenu;
