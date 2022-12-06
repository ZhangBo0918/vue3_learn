// https://api.vvhan.com/api/view 随机风景照
//https://api.vvhan.com/api/bing?type=json

import { http } from "../utils/http";

const commonUrl = 'http://localhost:8848/';

export function getData(url: string, param: any) {
  return http.httpRequestGet(commonUrl + url, param);
}

export function postData(url:string, param:any) {
  return http.httpRequestPost(commonUrl + url, param);
}

export function deleteHistory(url: string, param:any) {
  return http.httpRequestDelete(commonUrl + url, param);
}
