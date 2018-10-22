import { createStore } from "redux";
import reducer from "./reducer.js";

let state = {
  people: [],
  loaded: false
};  

let store = createStore(
  reducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;