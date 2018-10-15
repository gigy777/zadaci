import { createStore, compose } from "redux";

import rootReducer from "../reducers";

export default function configure() {
  // create store and add support for react dev tools in Chrome
  const store = createStore(rootReducer);

  return store;
}
