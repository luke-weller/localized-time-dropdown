import React from "react";
import { render, screen } from "@testing-library/react";
import AnalogClockDisplay from "./AnalogClockDisplay";

describe("AnalogClockDisplay", () => {
  const renderComponent = (location: string) => {
    render(<AnalogClockDisplay location={location} />);
  };

  test("renders without crashing", () => {
    renderComponent("New York");
    expect(screen.getByTestId("clock-container")).toBeInTheDocument();
  });
});
