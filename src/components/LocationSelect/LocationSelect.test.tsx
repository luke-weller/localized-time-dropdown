import { render, screen, fireEvent } from "@testing-library/react";
import LocationSelect from "./LocationSelect";
import { LocationSelectProps } from "../../interfaces";

describe("LocationSelect", () => {
  // Helper function to render the component with the given selected location
  const mockOnLocationChange = jest.fn();
  const renderComponent = (selectedLocation: string) => {
    const props: LocationSelectProps = {
      selectedLocation,
      onLocationChange: mockOnLocationChange,
    };
    render(<LocationSelect {...props} />);
  };

  beforeEach(() => {
    mockOnLocationChange.mockClear();
  });

  test("renders without crashing", () => {
    // Arrange: render the component
    renderComponent("New York");

    // Assert: the component is rendered
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("displays the correct initial selected location", () => {
    // Arrange: render the component with the selected location "London"
    renderComponent("London");

    // Assert: the select element has the correct value
    expect(screen.getByRole("combobox")).toHaveValue("London");
  });

  test("calls onLocationChange with the correct value when a new location is selected", () => {
    // Arrange: render the component with the selected location "New York"
    renderComponent("New York");

    // Act: select the location "São Paulo"
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "São Paulo" },
    });

    // Assert: onLocationChange is called with the correct value
    expect(mockOnLocationChange).toHaveBeenCalledWith("São Paulo");
  });
});
