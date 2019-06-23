import React from "react";

function Dashboard(props) {
  return (
    <>
      <h3>Dashboard</h3>
      <form>
        <button name="strike" value={0} onClick={props.addCounterHandler}>
          Strike
        </button>
        <button name="ball" onClick={props.addCounterHandler}>
          Ball
        </button>
        <button name="foul">Foul</button>
        <button name="hit">Hit</button>
      </form>
    </>
  );
}

export default Dashboard;
