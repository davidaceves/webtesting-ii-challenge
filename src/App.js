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

    if (this.state.strike === 3 || this.state.ball === 4) {
      this.setState({
        strike: (event.target.value = 0),
        ball: (event.target.value = 0)
      });
    }
  };

  resetCounterHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Dashboard
          addCounterHandler={this.addCounterHandler}
          resetCounterHandler={this.resetCounterHandler}
        />
        <Display ball={this.state.ball} strike={this.state.strike} />
      </div>
    );
  }
}

export default App;
