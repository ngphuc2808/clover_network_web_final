import Axios, { AxiosResponse } from "axios";

const http = Axios.create({
  baseURL: "http://47.128.64.91:8080",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

http.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    return Promise.reject(error.response?.data ? error.response.data : error);
  }
);

export default http;
