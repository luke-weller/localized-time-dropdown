import { FC, useState } from "react";
import LocationSelect from "./components/LocationSelect/LocationSelect";
import DigitalClockDisplay from "./components/DigitalClockDisplay/DigitalClockDisplay";
import AnalogClockDisplay from "./components/AnalogClockDisplay/AnalogClockDisplay";
import "./App.css";

const App: FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("New York");

  return (
    <div className="container">
      <LocationSelect
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
      />

      <AnalogClockDisplay location={selectedLocation} />
      <DigitalClockDisplay location={selectedLocation} />
    </div>
  );
};

export default App;
