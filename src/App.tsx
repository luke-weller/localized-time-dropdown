import { useState, FC } from "react";
import LocationSelect from "./components/LocationSelect/LocationSelect";
import ClockDisplay from "./components/ClockDisplay/ClockDisplay";
import "./App.css";

const App: FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("New York");

  return (
    <div>
      <div className="container">
        <LocationSelect
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
        />
      </div>
      <div className="container">
        <p>Showing time for {selectedLocation}</p>
        <ClockDisplay location={selectedLocation} />
      </div>
    </div>
  );
};

export default App;
