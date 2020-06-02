import React from 'react';

export default function HeaderMenu({ state, actions }) {
	return (
		// <div className="header-menu-wrapper" onMouseEnter={() => actions.showHeaderMenuTrue()} onMouseLeave={() => actions.showHeaderMenuFalse()}>
		<div className="header-menu-wrapper" onClickAway={() => actions.showHeaderMenuFalse()} onClick={() => actions.showHeaderMenuTrue()}>
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
	)
}