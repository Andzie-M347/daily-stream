import axios from "axios";

const URL = "https://api.deezer.com/";
const CORS_URL = `https://corsanywhere.herokuapp.com/${URL}`;

export const api = axios.create({
    baseURL: CORS_URL,
});
