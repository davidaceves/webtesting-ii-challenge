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
  const button = getByTestId("strike");

  fireEvent.click(button);
  fireEvent.click(button);
  await fireEvent.click(button);

  expect(strikes).toHaveTextContent(/0/i);
});
