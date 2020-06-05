import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Login extends Component {
	login = () =>  {
		localStorage.setItem('jwt', 'aaaaaaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbb.cccccccccccccccccc')
	}

	render() {
		console.log(localStorage.getItem('jwt'))
		console.log(this.props)
		return (
			<div id="login">
				<Header />
				<Body>
					<h1>Login画面です</h1>
					<Link to={'/'} onClick={() => this.login()}>ログインする</Link>
				</ Body>
				<Footer />
			</div>
		)
	}
}
