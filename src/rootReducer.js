import accountsReducer from "./accountsReducer";
import displayReducer from "./displayReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  accountsData: accountsReducer,
  displayData: displayReducer
});

export default rootReducer;