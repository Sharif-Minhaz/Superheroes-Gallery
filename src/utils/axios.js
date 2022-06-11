import axios from "axios";

const instance = axios.create({
	baseUrl: process.env.REACT_APP_BASE_URL,
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
	},
});

export default instance;
