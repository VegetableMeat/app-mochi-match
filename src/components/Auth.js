import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Auth extends Component {
	componentDidMount() {
		this.props.actions.authReq();
	}

	render() {
		console.log(this.props)
		return (
			<div className="auth">
				{this.props.state.init ?
					null
					: 
					this.props.state.loggedIn ?
						this.props.children
						:
						<Redirect to={'/login'} />
				}
			</div>
		)
	}
}