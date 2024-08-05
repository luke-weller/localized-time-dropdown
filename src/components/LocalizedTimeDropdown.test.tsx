import { fireEvent, render, screen } from "@testing-library/react";
import LocalizedTimeDropdown from "./LocalizedTimeDropdown";
import { act } from "react";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test("updates current time correctly", async () => {
  render(<LocalizedTimeDropdown items={[]} />);

  // Initial render
  expect(screen.getByText(/^\d{2}:\d{2}:\d{2}$/)).toBeInTheDocument();

  // Advance time by 1 minute
  act(() => {
    jest.advanceTimersByTime(60000);
  });
  await screen.findByText(/^\d{2}:\d{2}:\d{2}$/);

  // Advance time by 1 hour
  act(() => {
    jest.advanceTimersByTime(3600000);
  });
  await screen.findByText(/^\d{2}:\d{2}:\d{2}$/);
});

test("updates current time when location changes", async () => {
  render(<LocalizedTimeDropdown items={[]} />);

  // Initial render
  expect(screen.getByText(/^\d{2}:\d{2}:\d{2}$/)).toBeInTheDocument();

  // Change location to London
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "London" } });
  await screen.findByText(/^\d{2}:\d{2}:\d{2}$/);

  // Change location to São Paulo
  fireEvent.change(select, { target: { value: "São Paulo" } });
  await screen.findByText(/^\d{2}:\d{2}:\d{2}$/);
});
