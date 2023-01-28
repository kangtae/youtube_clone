import axios from "axios";

export default class Youtube{
	constructor(apiClient) {
		this.httpClient = axios.create({
			baseURL: "https://youtube.googleapis.com/youtube/v3",
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY}
		})
		
		this.apiClient = apiClient;
		
	}
	
	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
		
	}
	
	async #searchByKeyword(keyword) {
		return this.apiClient.search({
			params:{
				part: "snippet",
				maxReulsts: 25,
				type: "video",
				q: keyword
			}})
		.then(res => res.data.items)
		.then((items) => items.map((item) => ({...item, id: item.id.videoId})))
	}
	
	async #mostPopular() {
		return this.apiClient.video({
			params:{
				part: "snippet",
				maxReulsts: 25,
				chart: "mostPopular"
			}})
		.then(res => res.data.items);
	}
}

