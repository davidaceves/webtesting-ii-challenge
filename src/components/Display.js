import React from "react";

function Display(props) {
  return (
    <>
      <h3>Display</h3>
      <p>Ball: {props.ball}</p>
      <p>Strike: {props.strike}</p>
    </>
  );
}

export default Display;
