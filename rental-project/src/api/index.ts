// https://api.vvhan.com/api/view 随机风景照
// https://api.uomg.com/api/rand.img1?sort=美女&format=json
//https://api.vvhan.com/api/bing?type=json

import { http } from "../utils/http";

export function getRandomView() {
  return http.httpRequestGet("https://api.vvhan.com/api/bing?type=json", {});
}
