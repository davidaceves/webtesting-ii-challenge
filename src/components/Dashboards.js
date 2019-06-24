import React from "react";

function Dashboard(props) {
  return (
    <>
      <h3>Dashboard</h3>
      <div>
        <button name="strike" onClick={props.addCounterHandler}>
          Strike
        </button>
        <button name="ball" onClick={props.addCounterHandler}>
          Ball
        </button>
        <button name="foul">Foul</button>
        <button name="hit" onClick={props.resetHandler}>
          Hit
        </button>
      </div>
    </>
  );
}

export default Dashboard;
