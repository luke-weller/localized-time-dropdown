import React, { FC } from "react";
import "../../styles.css";

interface LocationSelectProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

const LocationSelect: FC<LocationSelectProps> = ({
  selectedLocation,
  onLocationChange,
}) => {
  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onLocationChange(event.target.value);
  };

  return (
    <div className="location-select-container">
      <select
        className="location-select"
        value={selectedLocation}
        onChange={handleLocationChange}
      >
        <option value="New York">New York</option>
        <option value="London">London</option>
        <option value="São Paulo">São Paulo</option>
      </select>
    </div>
  );
};

export default LocationSelect;