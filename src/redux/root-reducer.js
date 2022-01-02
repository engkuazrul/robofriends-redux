import { combineReducers } from "redux";

import robotReducer from "./robot/robot.reducer";

export default combineReducers({
  robot: robotReducer
});