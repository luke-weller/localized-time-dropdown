import { useState, useEffect, useCallback, FC, useMemo } from "react";
import { LocalizedTimeDropdownProps } from "../interfaces";
import "../styles.css";

const LocalizedTimeDropdown: FC<LocalizedTimeDropdownProps> = ({ items }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("New York");
  const [currentTime, setCurrentTime] = useState<string>("");

  const locationToTimeZone: { [key: string]: string } = useMemo(() => {
    return {
      "New York": "America/New_York",
      London: "Europe/London",
      "São Paulo": "America/Sao_Paulo",
    };
  }, []);

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
    logCurrentTime(selectedLocation); // Call immediately on mount
    const interval = setInterval(() => {
      logCurrentTime(selectedLocation);
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedLocation, logCurrentTime]);

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLocation(event.target.value);
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
        <div className="time-display">{currentTime}</div>
      </div>
    </div>
  );
};

export default LocalizedTimeDropdown;
