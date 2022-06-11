import axios from "../utils/axios";

export const charCategory = {
	heros: "heroes",
	villains: "villains",
	hero: "hero",
	villain: "villain",
};

export default class Character {
	constructor(category) {
		this._category = category;
		this._searchTerm = "";
	}

	async getInfo() {
		try {
			const results = await axios.get(this._getUrl());
			if (this._category === "heroes" || this._category === "villains") {
				return {
					data: results.data,
					category: this._category,
				};
			}
			return {
				data: results,
				category: this._category,
			};
		} catch (error) {
			console.error(error);
		}
	}

	_getUrl() {
		let baseUrl = process.env.REACT_APP_BASE_URL;
		if (this._searchTerm) {
			if(this._category === "heroes") {
				return baseUrl + `?${this._category.slice(0, -2)}=${this._searchTerm}`;
			} else if(this._category === "villains") {
				return baseUrl + `?${this._category.slice(0, -1)}=${this._searchTerm}`;
			}
		}
		return baseUrl + `${this._category}`;
	}

	search = (term) => {
		this._searchTerm = term;
		return this.getInfo();
	};
}
