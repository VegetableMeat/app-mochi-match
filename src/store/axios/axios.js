import axios from "axios";

export const axios_instance = axios.create({
  baseURL: "https://api.mochi-match.work",
});

axios_instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = token;

  return config;
});
