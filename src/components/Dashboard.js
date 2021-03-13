import React from "react";

function Dashboard(props) {
  return (
    <>
      <h3>Dashboard</h3>
      <div>
        <button
          data-testid="strike"
          name="strike"
          onClick={props.addCounterHandler}
        >
          Strike
        </button>
        <button
          data-testid="ball"
          name="ball"
          onClick={props.addCounterHandler}
        >
          Ball
        </button>
        <button data-testid="foul" name="foul" onClick={props.foulHandler}>
          Foul
        </button>
        <button data-testid="hit" name="hit" onClick={props.hitHandler}>
          Hit
        </button>
      </div>
    </>
  );
}

export default Dashboard;
