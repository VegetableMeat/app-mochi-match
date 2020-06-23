import React, { Component } from 'react';
import axios from 'axios';

export default class LoginDone extends Component {
	componentDidMount() {
		const url = `https://api.mochi-match.work/v1/auth/get`;
		return axios
		.get(url, {
			withCredentials: true
		})
		.then((res) => {
			localStorage.setItem('jwt', JSON.stringify(res.data))
			this.props.actions.loginOk()
			window.location.replace('/profilesetting');
		})
	}
	render() {
		return (
			<div></div>
		)
	}
}
