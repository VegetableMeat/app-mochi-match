import React, { Component } from "react";
import axios from "axios";

export default class LoginDone extends Component {
  componentDidMount() {
    const url = `https://api.mochi-match.work/v1/auth/get`;
    return axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        localStorage.setItem("expires_in", res.data.expires_in);
        this.props.actions.loginOk();
        window.location.replace("/profilesetting");
      })
      .catch((e) => {
        console.log("error", e);
      });
  }
  render() {
    return <div></div>;
  }
}
