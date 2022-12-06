// import axios from "axios";

// const defaultConfig = {
//   timeout: 5000,
//   baseUrl: "",
// };

// const axiosInstance = axios.create(defaultConfig);

// axiosInstance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// // 封装请求
// //1.get请求
// function httpRequestGet(url: string, params: any) {
//   return axiosInstance.get(url, params).then(
//     (res) => res.data,
//     (err) => Promise.reject(err)
//   );
// }

// //2.post请求
// function httpRequestPost(url: string, params: any) {
//   return axiosInstance.post(url, params).then(
//     (res) => res.data,
//     (err) => Promise.reject(err)
//   );
// }

// export default {
//   httpRequestGet,
//   httpRequestPost
// }

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const defaultConfig = {
  timeout: 5000,
  baseUrl: "",
};
class Http {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }
  private static axiosInstance = axios.create(defaultConfig);
  //请求拦截
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }
  //响应拦截
  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }
  /**
   * 封装请求
   */
  //get请求
  public httpRequestGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance
      .get(url, params)
      .then((res) => res.data)
      .catch();
  }
  //2.post请求
  public httpRequestPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance
      .post(url, params)
      .then((res) => res.data)
      .catch();
  }
  //3.delete请求
  public httpRequestDelete(url: string, id: AxiosRequestConfig) {
    return Http.axiosInstance
      .delete(url, id)
      .then((res) => res.data)
      .catch();
  }
}

export const http = new Http();
