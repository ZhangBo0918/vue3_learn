import axios from "axios";

const instance = axios.create({
  baseURL: ' http://localhost:8848/notes/',
  timeout: 1500,
})

instance.interceptors.request.use(config => {
  return config;
}, error => Promise.reject(error))

instance.interceptors.response.use(response => {
  return response;
}, error => Promise.reject(error))

export default instance;