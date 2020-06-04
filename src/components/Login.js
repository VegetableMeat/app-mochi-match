import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export default function Login() {
	return (
		<div id="login">
			<Header />
			<Body>
				<h1>Login画面です</h1>
			</ Body>
			<Footer />
		</div>
	)
}
