import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import CenterMainBody from './CenterMainBody';
import Modal from '../containers/ModalContainer';
import BodyHeader from './BodyHeader';

import './css/Sign.css';

export default class Register extends Component {
	componentDidMount() {
		this.props.actions.authReq();
	}
	
	locationGoogle() {
		window.location.replace('http://api.mochi-match.work/v1/auth/google/login');
	}

	render() {
		console.log(this.props.state)
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
			<div id="register">
			  <Header />
			  <Body>
				<CenterMainBody>
				  <BodyHeader>
					新規登録
				  </BodyHeader>
				  <div className="button-area">
					<button className="facebook">Facebookアカウントで新規登録</button>
					<button className="twitter">Twitterアカウントで新規登録</button>
					<button onClick={() => this.locationGoogle()} className="google">Googleアカウントで新規登録</button>
				  </div>
				  <div className="link-area">
					<Link to="/Login">ログイン</Link>はこちら
				  </div>
				</CenterMainBody>
			  </Body>
			  <Footer />
			  <Modal />
			</div>
		  )
	}
}
