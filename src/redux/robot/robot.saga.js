import { put, takeEvery } from "redux-saga/effects";

import { requestRobotsSuccess, requestRobotsFailed } from "./robot.actions";

import { RobotActionTypes } from "./robot.types";

const fetchRobotsAsync =  async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
}

export function* requestRobots() {
  try {
    const robots = yield fetchRobotsAsync();
    yield put(requestRobotsSuccess(robots));
  } catch (error) {
    yield put(requestRobotsFailed(error));
  }
}

export function* requestRobotsPending() {
  yield takeEvery(RobotActionTypes.REQUEST_ROBOTS_PENDING, requestRobots);
}
