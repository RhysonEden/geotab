import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getSomething, getSomethingElse } from "../api";

const App = () => {
  const [message, setMessage] = useState([]);
  const [resp, setResp] = useState([]);
  const [device, setDevice] = useState("");
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
    console.log(device);
    getSomethingElse(device);
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <Card
        resp={resp}
        device={device}
        setDevice={setDevice}
        getDevice={getDevice}
      />
    </div>
  );
};

export default App;
