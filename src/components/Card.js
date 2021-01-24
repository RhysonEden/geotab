import React from "react";
import Dropdown from "react-dropdown";
function Card({ resp, device, setDevice, getDevice }) {
  const changeDeviceNumbers = (e) => {
    e.preventDefault();
    setDevice(e.target.value);
  };

  return (
    <div>
      <select onChange={changeDeviceNumbers}>
        {resp.map((resp, index) => (
          <option key={resp.id} value={resp.id}>
            {resp.name}
          </option>
        ))}
      </select>
      <button onClick={getDevice}>Submit</button>
    </div>
  );
}

export default Card;
