import { call, all, put, takeLatest } from "redux-saga/effects";
import { weatherApi, apiKey, songsApi } from "../../../services/api";
import getSongType from "../../../utils/getSongType";
import { ReqWeatherParams, songProps } from "../../../utils/types";

import { setSongs, setWeather } from "./actions";

function* ReqWeather({ city }: ReqWeatherParams): any {
  try {
    const weather = yield call(
      weatherApi.get,
      `weather?q=${city}&lang=pt_br&units=metric&appid=${apiKey}`
    );

    const songType = yield getSongType(weather.data.main.temp);

    yield put(setWeather(weather.data));

    yield call(ReqSongs, songType);
  } catch (error) {
    console.log(error);
  }
}

function* ReqSongs(term: string, type = []): any {
  try {
    const songs = yield call(songsApi.get, `search?term=${term}&locale=en-US`);

    yield put(setSongs(songs.data));
  } catch (error) {}
}

export default all([
  takeLatest("REQ_WEATHER", ReqWeather),
  takeLatest("REQ_SONGS", ReqSongs),
]);
