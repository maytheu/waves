import { combineReducers } from "redux";

import userReducer from "./userReducer";
import productsReducer from "./productReducer";
import siteReducer from "./siteReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  site: siteReducer
});

export default rootReducer;
