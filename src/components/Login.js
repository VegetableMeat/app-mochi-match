import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import CenterMainBody from './CenterMainBody';
import Modal from '../containers/ModalContainer';
import BodyHeader from './BodyHeader';
import { Redirect } from 'react-router-dom';

import './css/Login.css';

export default class Login extends Component {
	componentDidMount() {
		this.props.actions.authReq();
	}

	render() {
		if(this.props.state.loadingFlag) {
			return ( null )
		} else {
			if(this.props.state.loggedIn) {
				return (
					<Redirect to={'/'} />
				)
			}
		}
		
		return (
			<div id="login">
			<Header />
			<Body>
				<CenterMainBody>
				<BodyHeader>
					ログイン
				</BodyHeader>
				<div className="button-area">
					<button className="facebook">Facebookアカウントでログイン</button>
					<button className="twitter">Twitterアカウントでログイン</button>
					<button onClick={() => this.props.actions.loginReq()} className="google">Googleアカウントでログイン</button>
				</div>
				<div className="register-link-area">
					<Link>新規登録</Link>はこちら
				</div>
				</CenterMainBody>
			</Body>
			<Footer />
			<Modal />
			</div>
		)
	}
}
