import axios from "axios";

export const api = axios.create({
  baseURL: "http://15.164.164.146/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("token");
  config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});
