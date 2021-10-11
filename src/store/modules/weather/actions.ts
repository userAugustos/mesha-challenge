import { actionType, songProps } from "../../../utils/types";

export const ReqWeather = (city: string) => {
  return {
    type: actionType.REQ_WEATHER,
    city, //payload
  };
};

export const ReqSongs = ({ term, limit }: songProps) => {
  return {
    type: actionType.SET_SONGS,
    term,
    limit,
  };
};

export const setSongs = (data: any) => {
  return {
    type: actionType.SET_SONGS,
    data,
  };
};

export const setWeather = (data: any) => {
  return {
    type: actionType.SET_WEATHER,
    data
  }
}