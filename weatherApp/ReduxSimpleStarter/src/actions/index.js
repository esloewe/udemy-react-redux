import axios from "axios";
const API_KEY = "50fc8d2beea998783d07fd93a7b00063";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

//api.openweathermap.org/data/2.5/forecast?q={city name},{country code} api call example

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},de`;
    const request = axios.get(url);
    console.log("request", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
