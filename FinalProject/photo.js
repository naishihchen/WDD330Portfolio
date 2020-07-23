export default class Photo {
	constructor(data) {
		this.title = data.title;
		this.data = data.date;
		this.description = data.explanation;
		this.hdurl = data.hdurl;
		this.url = data.url;
	}
}