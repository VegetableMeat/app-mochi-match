import axios from "axios";

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("jwt")
    config.headers.Authorization =  token;

    return config;
});