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
import Login from "./Login";
import Test from "./Test";
import Groups from "./Groups";
import Header from "./Header";
const App = () => {
  const [message, setMessage] = useState([]);
  const [resp, setResp] = useState([]);
  const [device, setDevice] = useState("");
  const [group, setGroup] = useState("");
  const [groupDisplay, setGroupDisplay] = useState([]);
  const [position, setPosition] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  let key = localStorage.getItem("key");
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
      // console.log("getDevice", res);
      //       console.log(groupSelect);
      setPosition(res);
      setLat(res.latitude);
      setLon(res.longitude);
      // console.log(lat, lon);
    });
  };

  const getGroup = (e) => {
    e.preventDefault();
    getGroupInfo(group).then((response) => {
      // console.log("getGroup", response);
      setResp(response);
    });
  };
  return (
    <>
      <div className="top">
        <Header
          key={key}
          groupSelect={groupSelect}
          group={group}
          setGroup={setGroup}
          resp={resp}
          device={device}
          setDevice={setDevice}
          getDevice={getDevice}
          getGroup={getGroup}
          position={position}
        />
      </div>
      <div className="main">
        {key === null && <Login />}
        {key !== null && <Position position={position} key={key} />}
      </div>
    </>
  );
};
export default App;

{
  /* <Header
        key={key}
        groupSelect={groupSelect}
        group={group}
        setGroup={setGroup}
        resp={resp}
        device={device}
        setDevice={setDevice}
        getDevice={getDevice}
        getGroup={getGroup}
        position={position}
      />
      <div className="main">
        {key === null && <Login />}
        {key !== null && <Position position={position} key={key} />}
      </div> */
}
