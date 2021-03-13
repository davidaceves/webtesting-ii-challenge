import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard.js";

it("should display buttons", () => {
  const { getByTestId } = rtl.render(<Dashboard />);

  const strike = getByTestId("strike");
  const ball = getByTestId("ball");
  const foul = getByTestId("foul");
  const hit = getByTestId("hit");

  expect(strike).toHaveTextContent(/strike/i);
  expect(ball).toHaveTextContent(/ball/i);
  expect(foul).toHaveTextContent(/foul/i);
  expect(hit).toHaveTextContent(/hit/i);
});
