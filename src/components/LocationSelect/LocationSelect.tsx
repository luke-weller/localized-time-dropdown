import React, { FC } from "react";
import "./LocationSelect.css";
import { LocationSelectProps } from "../../interfaces";

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
