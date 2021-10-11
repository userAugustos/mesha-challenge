export const actionType = {
  REQ_WEATHER: "REQ_WEATHER",
  REQ_SONGS: "REQ_SONGS",
  SET_SONGS: "SET_SONGS",
  SET_WEATHER: "SET_WEATHER"
};

export interface songProps{
  term?: string;
  limit?: number;
  type?: any;
};

export interface ReqWeatherParams{
  city: string;
  type: any;
};
