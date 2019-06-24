import React, { Component } from "react";

import Display from "./components/Display.js";
import Dashboard from "./components/Dashboards.js";

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  addCounterHandler = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: this.state[event.target.name] + 1
    });

    if (this.state.strike === 2 || this.state.ball === 3) {
      setTimeout(() => {
        this.setState({
          strike: 0,
          ball: 0
        });
      }, 500);
    }
  };

  resetHandler = event => {
    event.preventDefault();

    this.setState({
      strike: (event.target.value = 0),
      ball: (event.target.value = 0)
    });
  };

  render() {
    return (
      <div className="App">
        <Dashboard
          addCounterHandler={this.addCounterHandler}
          resetHandler={this.resetHandler}
        />
        <Display ball={this.state.ball} strike={this.state.strike} />
      </div>
    );
  }
}

export default App;
