import { RobotActionTypes } from "./robot.types"

export const requestRobotsPending = () => ({
  type: RobotActionTypes.REQUEST_ROBOTS_PENDING,
});

export const requestRobotsSuccess = robots => ({
  type: RobotActionTypes.REQUEST_ROBOTS_SUCCESS,
  payload: robots
});

export const requestRobotsFailed = errorMessage => ({
  type: RobotActionTypes.REQUEST_ROBOTS_FAILED,
  payload: errorMessage
});
