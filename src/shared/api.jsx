import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("token");
  config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
});
