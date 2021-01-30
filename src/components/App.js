import React, { useState, useEffect } from "react";
import Card from "./Card";
import {
  getGroupInfo,
  getSomething,
  getSomethingElse,
  getSomeInfo,
} from "../api";
import Position from "./Position";
import {
  BrowserRouter as Brouter,
  Switch,
  Link,
  useHistory,
  Route,
} from "react-router-dom";

import Test from "./Test";
import Groups from "./Groups";
const App = () => {
  const [message, setMessage] = useState([]);
  const [resp, setResp] = useState([]);
  const [device, setDevice] = useState("");
  const [group, setGroup] = useState("");
  const [groupDisplay, setGroupDisplay] = useState([]);
  const [position, setPosition] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  let groupSelect = localStorage.getItem("group");
  // useEffect(() => {
  //   getSomething()
  //     .then((response) => {
  //       // setMessage("Updated Information Loaded");
  //       // localStorage.setItem("name", JSON.stringify(response));
  //       console.log(response);
  //       setResp(response);
  //     })
  //     .catch((error) => {
  //       if (error === 500) {
  //         console.log("HAAAAH");
  //       } else {
  //         console.log("error", error);
  //         setResp(JSON.parse(localStorage.getItem("name")));
  //         setMessage("Setting to Local Database");
  //       }
  //     });
  // }, []);

  const getDevice = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    localStorage.removeItem("driver");
    getSomeInfo(device).then((res) => {
      console.log("getDevice", res);
      console.log(groupSelect);
      setPosition(res);
      setLat(res.latitude);
      setLon(res.longitude);
      console.log(lat, lon);
    });
  };

  const getGroup = (e) => {
    e.preventDefault();
    getGroupInfo(group).then((response) => {
      console.log("getGroup", response);
      setResp(response);
    });
  };
  if (!groupSelect) {
    return (
      <div className="header">
        <div className="App">
          <Groups group={group} getGroup={getGroup} setGroup={setGroup} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Card
          resp={resp}
          device={device}
          setDevice={setDevice}
          getDevice={getDevice}
          getGroup={getGroup}
        />
        <Position position={position} />
      </div>
    );
  }
};

export default App;
