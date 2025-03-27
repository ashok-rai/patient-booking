import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

export const fetchMessage = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error("Error fetching data", error);
		return { message: "Failed to fetch data" };
	}
};
