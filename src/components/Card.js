import React from "react";
import { BrowserRouter as Brouter, Switch, Link } from "react-router-dom";

function Card({
  resp,
  device,
  setDevice,
  getDevice,
  getGroup,
  groupDisplay,
  setGroupDisplay,
}) {
  const changeDeviceNumbers = (e) => {
    e.preventDefault();
    setDevice(e.target.value);
  };

  return (
    <div>
      <select onChange={changeDeviceNumbers}>
        <option value="1">Select Vehicle From Below</option>
        {resp.map((resp, index) => (
          <option key={resp.id} value={resp.id}>
            {resp.name}
          </option>
        ))}
      </select>
      <Link to="/position">
        <button onClick={getDevice}>Submit</button>
      </Link>
          </div>
  );
}

export default Card;
