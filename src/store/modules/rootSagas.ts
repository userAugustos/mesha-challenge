import { all } from 'redux-saga/effects';

import weatherSaga from "./weather/saga";

export function* rootSagas(): any {
  return yield all([weatherSaga])
}