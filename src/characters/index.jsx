import axios from "../utils/axios";

export const charCategory = {
	heroes: "heroes",
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
			if (
				this._category === "heroes" ||
				this._category === "villains" ||
				results.data === "Hero Not Found"
			) {
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
			return baseUrl + `?hero=${this._searchTerm}`;
		}
		return baseUrl + `${this._category}`;
	}

	changeCategory = (category) => {
		this._category = category;
		return this.getInfo();
	};

	search = (term) => {
		this._searchTerm = term;
		return this.getInfo();
	};

	setSearchTerm = (term) => {
		this._searchTerm = term;
	};
}
