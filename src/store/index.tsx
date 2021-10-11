import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootReducers from "./modules/rootReducers";
import Songs from "./modules/weather/reducer";
import { rootSagas } from "./modules/rootSagas";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(Songs, bindMiddleware([sagaMiddleware]));

  sagaMiddleware.run(rootSagas);

  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
