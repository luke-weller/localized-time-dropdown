import { render, screen } from "@testing-library/react";
import AnalogClockDisplay from "./AnalogClockDisplay";
import { ClockDisplayProps } from "../../interfaces";

describe("AnalogClockDisplay", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const renderComponent = (location: string) => {
    const props: ClockDisplayProps = { location };
    render(<AnalogClockDisplay {...props} />);
  };

  test("renders without crashing", () => {
    renderComponent("New York");
    expect(screen.getByTestId("clock")).toBeInTheDocument();
  });
});
