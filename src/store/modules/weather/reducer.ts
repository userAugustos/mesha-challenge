import { HYDRATE } from "next-redux-wrapper";
import { actionType } from "../../../utils/types";

function Reducer(state = [], action: any) {
  switch (action.type) {
    case HYDRATE:
      return action.data;
    case actionType.SET_SONGS:
      return {
        ...state,
        songs: action.data,
      };
    case actionType.SET_WEATHER:
      return{
        ...state,
        weather: action.data
      }
    default:
      return state;
  }
}

export default Reducer;
