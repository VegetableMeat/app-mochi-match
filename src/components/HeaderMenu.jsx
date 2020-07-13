import React from "react";
import { Link } from "react-router-dom";
import { ClickAwayListener } from "@material-ui/core";

export default function HeaderMenu({ state, actions }) {
  return (
    <ClickAwayListener onClickAway={() => actions.showHeaderMenuFalse()}>
      <div
        className="header-menu-wrapper"
        onClick={() => actions.showHeaderMenuTrue()}
        onMouseEnter={() => actions.showHeaderMenuTrue()}
        onMouseLeave={() => actions.showHeaderMenuFalse()}
      >
        <div className="header-menu-icon">
          <i class="fas fa-user-circle"></i>
        </div>
        {state.showFlag ? (
          <div className="header-menu">
            <ul className="header-menu-list">
              <Link to="/login">
                <li>
                  <i class="fas fa-sign-in-alt"></i>Login
                </li>
              </Link>
              <Link to="/register">
                <li>
                  <i class="fas fa-user-plus"></i>Sign Up
                </li>
              </Link>
              <Link to="/profilesetting">
                <li>
                  <i class="far fa-id-card"></i>Profile
                </li>
              </Link>
              <Link to="/configuration">
                <li>
                  <i class="fas fa-user-cog"></i>Setting
                </li>
              </Link>
              <Link to="/history">
                <li>
                  <i class="fas fa-history"></i>Play History
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
