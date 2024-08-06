import { FC, useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./AnalogClockDisplay.css";

interface ClockDisplayProps {
  location: string;
}

const AnalogClockDisplay: FC<ClockDisplayProps> = ({ location }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const locationToOffset: { [key: string]: number } = {
      "New York": -4, // UTC-4
      London: 0, // UTC+0
      "São Paulo": -3, // UTC-3
    };

    const updateTime = () => {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const localTime = new Date(
        utcTime + locationToOffset[location] * 3600000
      );
      setTime(localTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [location]);

  return (
    <div className="clock-container">
      <Clock
        className={"clock"}
        value={time}
        hourHandWidth={8}
        hourHandLength={60}
        minuteHandWidth={4}
        minuteHandLength={80}
        secondHandWidth={2}
        secondHandLength={90}
        hourMarksWidth={2}
        hourMarksLength={12}
        minuteMarksWidth={1}
        minuteMarksLength={6}
        size={Math.min(window.innerWidth * 0.8, window.innerHeight * 0.8)} // Adjust the size to be 80% of the screen width or height, whichever is smaller
      />
    </div>
  );
};

export default AnalogClockDisplay;
