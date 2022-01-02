import { RobotActionTypes } from "./robot.types"

export const requestRobots = () => (dispatch) => {
  dispatch({type: RobotActionTypes.REQUEST_ROBOTS_PENDING}),
  fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => dispatch({type: RobotActionTypes.REQUEST_ROBOTS_SUCCESS, payload: data}))
      .catch(error => dispatch({type: RobotActionTypes.REQUEST_ROBOTS_FAILED, payload: error}))
}