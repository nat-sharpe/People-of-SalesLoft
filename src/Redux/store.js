import { createStore } from "redux";
import reducer from "./reducer.js";

let state = {
  people: [
    {
      "display_name": "Kyle Porter",
      "email_address": "kyle.porter@salesloft.com",
      "title": "CEO"
    },
    {
      "display_name": "Nora Ignatius",
      "email_address": "nora.ignatius@salesloft.com",
      "title": "Corporate Recruiter"
    },
    {
      "display_name": "Nat Sharpe",
      "email_address": "nat.sharpe@salesloft.com",
      "title": "Support Software Engineer"
    }
  ]
};

let store = createStore(
  reducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;