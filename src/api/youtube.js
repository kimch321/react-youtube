import axios from "axios";

// 문제. 컴포넌트가 너무 많은 정보를 가지고 있음. api주소, 데이터가 담기는 키의 경로 등.
// 해결. 네트워크를 담당하는 모듈을 분리함.
export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: process.env.REACT_APP_YOUTUBE_API_KEY},
    })
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient.get('search', {params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
    }})
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.httpClient.get('videos', {params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
    }})
    .then((res) => res.data.items)
  }
}