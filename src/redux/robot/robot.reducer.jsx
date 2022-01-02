import { RobotActionTypes } from "./robot.types";

const INITIAL_STATE = {
  isPending: false,
  robots: [],
  error: "",
};

const robotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RobotActionTypes.REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case RobotActionTypes.REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPending: false,
      };
    case RobotActionTypes.REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

export default robotReducer;
