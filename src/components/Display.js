import React from "react";

function Display(props) {
  return (
    <div>
      <h3>Display</h3>
      <p className="ball-class">Ball: {props.ball}</p>
      <p className="strike-class">Strike: {props.strike}</p>
    </div>
  );
}

export default Display;
