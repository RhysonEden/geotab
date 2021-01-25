import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getGroupInfo, getSomething, getSomethingElse } from "../api";
import Position from "./Position";
import { BrowserRouter as Brouter, Switch, Link } from "react-router-dom";
import Test from "./Test";
import Groups from "./Groups";
const App = () => {
  const [message, setMessage] = useState([]);
  const [resp, setResp] = useState([]);
  const [device, setDevice] = useState("");
  const [group, setGroup] = useState("");
  const [groupDisplay, setGroupDisplay] = useState([]);
  const [position, setPosition] = useState([]);
  useEffect(() => {
    getSomething()
      .then((response) => {
        setMessage("Updated Information Loaded");
        localStorage.setItem("name", JSON.stringify(response));
        setResp(response);
      })
      .catch((error) => {
        if (error === 500) {
          console.log("HAAAAH");
        } else {
          console.log("error", error);
          setResp(JSON.parse(localStorage.getItem("name")));
          setMessage("Setting to Local Database");
        }
      });
  }, []);

  const getDevice = (e) => {
    e.preventDefault();
    getSomethingElse(device).then((res) => {
      console.log("results", res);
      setPosition(res);
    });
  };

  const getGroup = (e) => {
    e.preventDefault();
    getGroupInfo(group).then((response) => {
      console.log(response);
      // setGroupDisplay(response);
    });
  };

  return (
    <Brouter>
      <div className="header">
        <div className="App">
          <h1>{message}</h1>
          <Groups group={group} getGroup={getGroup} setGroup={setGroup} />
          <Card
            resp={resp}
            device={device}
            setDevice={setDevice}
            getDevice={getDevice}
            getGroup={getGroup}
          />
          <Switch>
            <Position
              path="/position"
              exact
              component={Position}
              position={position}
            />
          </Switch>
        </div>
      </div>
    </Brouter>
  );
};

export default App;
