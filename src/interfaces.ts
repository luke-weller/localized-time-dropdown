export interface LocationSelectProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export interface ClockDisplayProps {
  location: string;
}
