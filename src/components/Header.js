import React from "react";
import Groups from "./Groups";
import Login from "./Login";
import Card from "./Card";
import Position from "./Position";
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
  if (!key) {
    return (
      <>
        <div className="header">Please Login</div>
      </>
    );
  } else {
    if (!groupSelect) {
      return (
        <div className="header">
          <Groups group={group} getGroup={getGroup} setGroup={setGroup} />
        </div>
      );
    } else {
      return (
        <>
          <div className="header">
            <Card
              resp={resp}
              device={device}
              setDevice={setDevice}
              getDevice={getDevice}
              getGroup={getGroup}
            />
          </div>
        </>
      );
    }
  }
};

export default Header;
