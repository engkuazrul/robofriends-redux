import { createSelector } from "reselect";

const selectRobot = state => state.robot;

export const selectRobotItems = createSelector(
  [selectRobot],
  (robot) => robot.robots
);