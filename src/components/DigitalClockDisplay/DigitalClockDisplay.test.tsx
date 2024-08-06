import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import DigitalClockDisplay from "./DigitalClockDisplay";
import { ClockDisplayProps } from "../../interfaces";

describe("DigitalClockDisplay", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const renderComponent = (location: string) => {
    const props: ClockDisplayProps = { location };
    render(<DigitalClockDisplay {...props} />);
  };

  test("renders without crashing", () => {
    renderComponent("New York");
    expect(screen.getByText(/:/)).toBeInTheDocument();
  });

  test("displays the correct initial time", () => {
    const initialTime = new Date(2023, 0, 1, 12, 0, 0); // January 1, 2023, 12:00:00
    jest.setSystemTime(initialTime);
    renderComponent("New York");
    expect(screen.getByText("12:00:00")).toBeInTheDocument();
  });

  test("updates the time display correctly", async () => {
    const initialTime = new Date(2023, 0, 1, 12, 0, 0); // January 1, 2023, 12:00:00
    jest.setSystemTime(initialTime);
    renderComponent("New York");

    act(() => {
      jest.advanceTimersByTime(1000); // Advance time by 1 second
    });

    await waitFor(() => {
      const clockDisplay = screen.getByText((content, element) => {
        return (
          element instanceof HTMLElement &&
          element.classList.contains("clock-display")
        );
      });

      // Assert: the time display is updated to 12:00:01
      expect(clockDisplay).toHaveTextContent("12:00:01");
    });
  });
});
