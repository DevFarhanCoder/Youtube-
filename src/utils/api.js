import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY || "AIzaSyD4f_oIs_Nay4RhXDiNPMZLE7-2VGt1n7I",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;  // re-throw the error after logging it
    }
};
