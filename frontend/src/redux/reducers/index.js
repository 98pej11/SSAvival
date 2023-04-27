import { combineReducers } from "redux";
import sampleReducer from "./sample";
import gameScoreReducer from "./gameScoreReducer";

const rootReducer = combineReducers({
  sampleReducer,
  gameScoreReducer,
});

export default rootReducer;
