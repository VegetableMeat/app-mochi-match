import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Auth extends Component {
  componentDidMount() {
    this.props.actions.authReq();
  }

  render() {
    if (this.props.state.loadingFlag) {
      return null;
    } else {
      if (!this.props.state.loggedIn) {
        return <Redirect to={'/login'} />;
      }
    }

    return this.props.children;
  }
}
