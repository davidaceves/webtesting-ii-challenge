import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard.js";
import Display from "./Display.js";
import App from "../App.js";
import { fireEvent } from "@testing-library/react/dist";

it("should reset balls and strikes to zero after strike has been hit three times", async () => {
  const { getByText, getByTestId } = rtl.render(<App />);

  const strikes = getByText(/Strike:/i);
  const strikeButton = getByTestId("strike");

  fireEvent.click(strikeButton);
  fireEvent.click(strikeButton);
  await fireEvent.click(strikeButton);

  expect(strikes).toHaveTextContent(/0/i);
});

it("should reset balls and strikes to zero after a hit", async () => {
  const { getByText, getByTestId } = rtl.render(<App />);

  const strikes = getByText(/Strike:/i);
  const balls = getByText(/Ball:/i);
  const strikeButton = getByTestId("strike");
  const ballButton = getByTestId("ball");
  const hitButton = getByTestId("hit");

  fireEvent.click(strikeButton);
  fireEvent.click(ballButton);
  await fireEvent.click(hitButton);

  expect(strikes).toHaveTextContent(/0/i);
  expect(balls).toHaveTextContent(/0/i);
});
