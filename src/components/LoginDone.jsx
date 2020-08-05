import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const LoginDone = ({ actions }) => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  useEffect(async () => {
    const url = `https://api.mochi-match.work/v1/auth/get`;
    const data = { token: query.get("token") };
    try {
      const res = await axios.post(url, data);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      localStorage.setItem("expires_in", res.data.expires_in);
      actions.loginOk();
      window.location.replace("/profilesetting");
    } catch (e) {
      console.log("error", e);
    }
  }, []);

  return <Loading />;
};

export default LoginDone;
