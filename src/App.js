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

  resetHandler = () => {
    if (this.state.strike >= 2 || this.state.ball === 3) {
      setTimeout(() => {
        this.setState({
          strike: 0,
          ball: 0
        });
      }, 500);
    }
  };

  hitHandler = event => {
    event.preventDefault();

    this.setState({
      strike: 0,
      ball: 0
    });
  };

  addCounterHandler = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: this.state[event.target.name] + 1
    });

    this.resetHandler();
  };

  foulHandler = async event => {
    event.preventDefault();
    this.resetHandler();
    try {
      if (this.state.strike === 0) {
        this.setState({
          strike: 1
        });
      } else if (this.state.strike === 1) {
        await this.setState({
          strike: 3
        });
        this.resetHandler();
      } else {
        this.resetHandler();
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="App">
        <Dashboard
          addCounterHandler={this.addCounterHandler}
          foulHandler={this.foulHandler}
          hitHandler={this.hitHandler}
        />
        <Display ball={this.state.ball} strike={this.state.strike} />
      </div>
    );
  }
}

export default App;
