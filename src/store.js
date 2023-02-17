import { applyMiddleware, legacy_createStore } from "redux";
import logger from 'redux-logger'
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";

const store = legacy_createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

export default store;