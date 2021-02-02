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

  const wipe = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="header">
      <select className="select" onChange={changeDeviceNumbers}>
        <option value="1">Select Vehicle From Below</option>
        {resp.map((resp, index) => (
          <option key={resp.id} value={resp.name}>
            {resp.firstName} {resp.lastName}
          </option>
        ))}
      </select>
      {/* <Link to="/position"> */}
      <button onClick={getDevice}>Submit</button>
      <button onClick={wipe}>Reset</button>
      {/* </Link> */}
    </div>
  );
}

export default Card;
