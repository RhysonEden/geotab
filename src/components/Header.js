import React from "react";
import Groups from "./Groups";
import Login from "./Login";
import Card from "./Card";
import Position from "./Position";
import Logout from "./Logout";
import Reset from "./Reset";
const Header = ({
  groupSelect,
  group,
  getGroup,
  setGroup,
  resp,
  device,
  setDevice,
  getDevice,
  position,
}) => {
  let key = localStorage.getItem("key");
  let user = localStorage.getItem("user");

  const wipe = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  if (!key) {
    return (
      <>
        <div className="headerthree">GeoTab Location</div>
        <div className="headertwo">Please Login</div>
        <div className="headerfour">
          <div>Welcome! {user}</div>
          <span className="full">
            <Logout />
            <Reset />
          </span>
        </div>
      </>
    );
  } else {
    if (!groupSelect) {
      return (
        <>
          <div className="headerthree">GeoTab Location</div>
          <div className="headertwo">
            <Groups group={group} getGroup={getGroup} setGroup={setGroup} />
          </div>
          <div className="headerfour">
            <div>Welcome! {user}</div>
            <span className="full">
              <Logout />
              <Reset />
            </span>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="headerthree">GeoTab Location</div>
          <div className="headertwo">
            <Card
              resp={resp}
              device={device}
              setDevice={setDevice}
              getDevice={getDevice}
              getGroup={getGroup}
            />
          </div>
          <div className="headerfour">
            <div>Welcome! {user}</div>
            <span className="full">
              <Logout />
              <Reset />
            </span>
          </div>
        </>
      );
    }
  }
};

export default Header;
