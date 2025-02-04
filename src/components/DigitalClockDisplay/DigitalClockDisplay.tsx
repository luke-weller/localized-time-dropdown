import { useState, useEffect, useCallback, FC, useMemo } from "react";
import "./DigitalClockDisplay.css";
import { ClockDisplayProps } from "../../interfaces";

const DigitalClockDisplay: FC<ClockDisplayProps> = ({ location }) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const locationToTimeZone: { [key: string]: string } = useMemo(() => {
    return {
      "New York": "America/New_York",
      London: "Europe/London",
      "São Paulo": "America/Sao_Paulo",
    };
  }, []);

  const logCurrentTime = useCallback(() => {
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
    console.log(`Current time in ${location}: ${formattedTime}`);
  }, [location, locationToTimeZone]);

  useEffect(() => {
    logCurrentTime();
    const interval = setInterval(() => {
      logCurrentTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [location, logCurrentTime]);

  return <div className="clock-display">{currentTime}</div>;
};

export default DigitalClockDisplay;
