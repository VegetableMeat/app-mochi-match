import React from 'react';
import { ClickAwayListener } from '@material-ui/core';

export default function HeaderMenu({ state, actions }) {
	return (
    <ClickAwayListener onClickAway={() => actions.showHeaderMenuFalse()}>
      <div className="header-menu-wrapper" onClick={() => actions.showHeaderMenuTrue()} onMouseEnter={() => actions.showHeaderMenuTrue()} onMouseLeave={() => actions.showHeaderMenuFalse()}>
        <div className="header-menu-icon">
          <i class="fas fa-user-circle"></i>
        </div>
        {state.showFlag ?
          <div className="header-menu">
            <ul className="header-menu-list">
              <li>Login</li>
              <li>Sign Up</li>
              <li>Profile</li>
              <li>Config</li>
              <li>Play History</li>
            </ul>
          </div>
          :
          null
        }
      </div>
    </ClickAwayListener>
	)
}