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
  let user = localStorage.getItem("user");
  const changeDeviceNumbers = (e) => {
    e.preventDefault();
    setDevice(e.target.value);
  };

  return (
    <div className="header">
      <div className="headertwo">
        <select className="select" onChange={changeDeviceNumbers}>
          <option value="1">Select Vehicle From Below</option>
          {resp.map((resp, index) => (
            <option key={resp.id} value={resp.name}>
              {resp.firstName} {resp.lastName}
            </option>
          ))}
        </select>
        <button onClick={getDevice}>Submit</button>
      </div>
    </div>
  );
}

export default Card;
