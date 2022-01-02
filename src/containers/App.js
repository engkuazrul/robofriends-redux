import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

import { requestRobots } from "../redux/robot/robot.actions";

import "./App.css";

const App = ({robots, isPending, onRequestRobots}) => {

  const [searchField, setSearchField] = useState('');

  const handleChange = event => {
    const {value} = event.target;

    setSearchField(value);
  }

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={handleChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

const mapStateToProps = ({robot}) => ({
  robots: robot.robots,
  isPending: robot.isPending,
  error: robot.error,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestRobots: robot => dispatch(requestRobots(robot)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
