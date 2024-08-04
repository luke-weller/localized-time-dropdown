import { useState, useEffect, useCallback, FC } from "react";
import { LocalizedTimeDropdownProps } from "../interfaces";
import "../styles.css";

const LocalizedTimeDropdown: FC<LocalizedTimeDropdownProps> = ({ items }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("New York");
  const [currentTime, setCurrentTime] = useState<string>("");

  const locationToTimeZone: { [key: string]: string } = {
    "New York": "America/New_York",
    London: "Europe/London",
    "São Paulo": "America/Sao_Paulo",
  };

  const logCurrentTime = useCallback(
    (location: string) => {
      const now = new Date();
      const timeZone = locationToTimeZone[location];
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      }).format(now);
      setCurrentTime(formattedTime);
    },
    [locationToTimeZone]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      logCurrentTime(selectedLocation);
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedLocation, logCurrentTime]);

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLocation = event.target.value;
    setSelectedLocation(newLocation);
    logCurrentTime(newLocation);
  };

  return (
    <div className="container">
      <div className="dropdown-container">
        <select value={selectedLocation} onChange={handleLocationChange}>
          {Object.keys(locationToTimeZone).map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="time-container">
        <p>Current time in {selectedLocation}:</p>
        <div className="time-display">{currentTime}</div>
      </div>
    </div>
  );
};

export default LocalizedTimeDropdown;
