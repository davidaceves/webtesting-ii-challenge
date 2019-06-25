import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import App from "./App";
import Dashboard from "./components/Dashboard.js";
import Display from "./components/Display.js";

it("renders without crashing", () => {
  rtl.render(<App />);
});

it("renders dashboard", () => {
  const wrapper = rtl.render(<App />);

  const element = wrapper.queryByText(/dashboard/i);

  expect(element).toBeInTheDocument();
  expect(element).toBeTruthy();
  expect(element).toBeVisible();
});
