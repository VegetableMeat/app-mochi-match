import React from 'react';
import { Link } from 'react-router-dom';
import { ClickAwayListener } from '@material-ui/core';

export default function HeaderMenu({ state, actions }) {
	return (
    <ClickAwayListener onClickAway={() => actions.showHeaderMenuFalse()}>
			<div className="header-menu-wrapper" 
				onClick={() => actions.showHeaderMenuTrue()} 
				onMouseEnter={() => actions.showHeaderMenuTrue()} 
				onMouseLeave={() => actions.showHeaderMenuFalse()}>
		<div className="header-menu-icon">
            <i class="fas fa-user-circle"></i>
        </div>
		{state.showFlag ? 
			<div className="header-menu">
				<ul className="header-menu-list">
					<li><Link to="/Login"><i class="fas fa-sign-in-alt"></i>Login</Link></li>
					<li><i class="fas fa-user-plus"></i>Sign Up</li>
					<li><i class="far fa-id-card"></i>Profile</li>
					<li><i class="fas fa-user-cog"></i>Setting</li>
					<li><i class="fas fa-history"></i>Play History</li>
				</ul>
        	</div>
			:
			null
		}
      </div>
    </ClickAwayListener>
	)
}