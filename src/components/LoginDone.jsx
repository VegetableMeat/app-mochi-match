import React, { useEffect } from "react";
import axios from "axios";

const LoginDone = ({ actions }) => {
  useEffect(async () => {
    const url = `https://api.mochi-match.work/v1/auth/get`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      localStorage.setItem("expires_in", res.data.expires_in);
      actions.loginOk();
      window.location.replace("/profilesetting");
    } catch (e) {
      console.log("error", e);
    }
  }, []);

  return <div></div>;
};

export default LoginDone;
