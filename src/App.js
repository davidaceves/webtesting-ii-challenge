import React, { Component } from "react";

import Display from "./components/Display.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  resetHandler = () => {
    if (this.state.strike >= 3 || this.state.ball >= 4) {
      this.setState({
        strike: 0,
        ball: 0
      });
    }
  };

  hitHandler = event => {
    event.preventDefault();

    this.setState({
      strike: 0,
      ball: 0
    });
  };

  addCounterHandler = async event => {
    event.preventDefault();
    try {
      await this.setState({
        [event.target.name]: this.state[event.target.name] + 1
      });

      this.resetHandler();
    } catch (e) {
      console.log(e);
    }
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
