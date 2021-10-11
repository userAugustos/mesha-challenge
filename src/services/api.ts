import axios from "axios";

export const apiKey = "9cd3ae30135c1e30edfd064e596a0f2a";

export const weatherApi = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Credentials": "true",
  // },
});

export const songsApi = axios.create({
  baseURL: "https://shazam.p.rapidapi.com/",
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "e2e2d97ecdmsh375ab889d07567dp1e57e0jsndafb7a9a5e8a",
  },
});
